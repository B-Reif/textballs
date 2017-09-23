const baseWords = require("word-list-json");
const fs = require("fs");

// word-list-json is sorted by word length
// The subWords slice contains all words that are 3-6 letters long.
const subWords = baseWords.slice(1435, 42030);
// The fullWords slice contains all 6-letter words.
const fullWords = baseWords.slice(19614, 42030)




// If 
function keyIncrementer(obj, key) {
	if (obj.hasOwnProperty(key)) {
		return Object.assign(obj, {
			[key]: obj[key] + 1
		})
	}
	return Object.assign(obj, {
		[key]: 1
	})
}

function stringToLetterMap(string) {
	const result = {}
	return string.split("").reduce((acc, letter) =>
		keyIncrementer(acc, letter)
	, {})
}

// const subWordMaps = subWords.map(w => stringToLetterMap(w));
const fullWordMaps = fullWords.map(w => stringToLetterMap(w));

function wordContains(fullWord, subWord) {
	const lettersPresent = Object.keys(subWord).every(letter => fullWord.hasOwnProperty(letter))
	const validCount = Object.keys(subWord).every(letter => subWord[letter] <= fullWord[letter])
	return (lettersPresent && validCount);
}

function filterSubwords(fullWord) {
	return subWords.filter((subWord, index) => {
		return wordContains(fullWord, stringToLetterMap(subWord))
	})
}

const gameSets = fullWordMaps.slice(0,100).map((fullWord, i) => {
	return {
		keyWord: fullWords[i],
		subWords: filterSubwords(fullWord)
	}
})

const gameSetsJSON = JSON.stringify(gameSets);

fs.writeFileSync("gamesets.json", gameSetsJSON, err => console.log(err));

console.log(gameSets[0])
