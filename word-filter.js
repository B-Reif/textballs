const baseWords = require("word-list-json");
const uniq = require("lodash/uniq");
const profanityFilter = require("profanity-analysis");
const fs = require("fs");

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

const gameWords = baseWords.slice(124, 42030);

const lengthSlices = {
	"3": baseWords.slice(124, 1435),
	"4": baseWords.slice(1435, 6963),
	"5": baseWords.slice(6963, 19614),
	"6": baseWords.slice(19614, 42030)
};

function filterWords(words) {
	return words.filter(w => !profanityFilter.analyzeBlob(w).failed);
}

const filteredGameWords = filterWords(gameWords);
const filteredLongWords = filterWords(lengthSlices[6]);

function gameFromWord(word) {
	const permutations = deepPermute(word);
	const words = permutations.filter(p => filteredGameWords.includes(p));
	return words;
}

const games = filteredLongWords.slice(0, 100).map(gameFromWord);
console.log(games);

