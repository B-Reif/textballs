import './twistWords';

var twistWords = JSON.parse(twistWordsRaw);

// Turns a word into an object with its letters as keys
// and the number of times they occur as values.
var assigner = (obj, key) => {
	if (obj.hasOwnProperty(key)) {
		return {...obj, [key]: obj[key] + 1}
	}
	return { ...obj, [key]: 1 }
}

export default twistWords;