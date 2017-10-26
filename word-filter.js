const wordlist = require("wordlist-english");
const uniq = require("lodash/uniq");
const profanityFilter = require("profanity-analysis");
const fs = require("fs");

const baseWords = wordlist["english"];

// from le_m on StackOverflow
// https://stackoverflow.com/a/37580979
function permute(word) {
	var permutation = word.split("");
	var length = permutation.length,
		result = [permutation.slice()],
		c = new Array(length).fill(0),
		i = 1,
		k,
		p;

	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = permutation[i];
			permutation[i] = permutation[k];
			permutation[k] = p;
			++c[i];
			i = 1;
			result.push(permutation.slice());
		} else {
			c[i] = 0;
			++i;
		}
	}
	return result.map(r => r.join(""));
}

function deepPermute(word, permutations = []) {
	const permutes = permutations.concat(permute(word));
	if (word.length === 3) {
		return permutes;
	}
	const letterArray = word.split("");
	const nextSubstrings = letterArray.map((letter, idx) =>
		[...letterArray.slice(0, idx), ...letterArray.slice(idx + 1)].join("")
	);
	const nextPermutations = nextSubstrings.reduce(
		(acc, val) => acc.concat(deepPermute(val, [])),
		[]
	);
	const result = uniq(permutes.concat(nextPermutations));
	return result;
}

const gameWords = baseWords.filter(w => w.length > 2 && w.length < 7);
const longWords = gameWords.filter(w => w.length === 6);

function filterWords(words) {
	return words.filter(w => !profanityFilter.analyzeBlob(w).failed);
}


const filteredGameWords = filterWords(gameWords);
const filteredLongWords = filterWords(longWords);

function gameFromWord(word) {
	const permutations = deepPermute(word);
	const words = permutations.filter(p => filteredGameWords.includes(p));
	return words;
}

// for (let idx = 0; idx < filteredLongWords.length; idx += 100) {
// 	const cap = Math.min(idx + 100, filteredLongWords.length)
// 	const games = filteredLongWords.slice(idx, cap).map(gameFromWord);
// 	const filename = `games/games${idx / 100}.json`;
// 	fs.writeFileSync(filename, JSON.stringify(games))
// }

