const fs = require("fs");

const strings = [];

for (let i = 0; i < 107; i++) {
	const filename = `games/games${i}.json`;
	const gameString = fs.readFileSync(filename, "utf8");
	strings.push(gameString);
}
const arrays = strings.map(s => JSON.parse(s));
const gameArray = strings.reduce((acc, val) => acc.concat(JSON.parse(val)), []);

fs.writeFileSync("src/__games__.json", JSON.stringify(gameArray));

console.log(gameArray);
