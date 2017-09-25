const baseWords = require("word-list-json");
const uniq = require("lodash/uniq");
const fs = require("fs");

const lengthSlices = {
	"3": baseWords.slice(124, 1435),
	"4": baseWords.slice(1435, 6963),
	"5": baseWords.slice(6963, 19614),
	"6": baseWords.slice(19614, 42030)
};

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
	if (word.length === 3) {
		return permutations.concat(permute(word));
	}
	return deepPermute(
		word.slice(0, word.length - 1),
		permutations.concat(permute(word))
	);
}

console.log("Generating permutations");
// const longWordPermuts = lengthSlices["6"].slice(8, 9).map(w => deepPermute(w));
// const longWordPermuts = ["flying"].map(w => deepPermute(w))
// console.log(longWordPermuts[0].every(w => w.length === 6));
// const filteredPermuts = longWordPermuts.map((substrings, index) => {
// 	return uniq(substrings.filter(ss => lengthSlices[ss.length].includes(ss)));
// });

// console.log(filteredPermuts[0]);
