import fs from "fs";

const data = fs.readFileSync("/Users/ridgwell1/dev/adventOfCode2022/day_2_input.txt", "utf8");

const outcomeLogic = new Map([
	["AX", 0 + 3],
	["AY", 3 + 1],
	["AZ", 6 + 2],
	["BX", 0 + 1],
	["BY", 3 + 2],
	["BZ", 6 + 3],
	["CX", 0 + 2],
	["CY", 3 + 3],
	["CZ", 6 + 1],
]);

let round = "";
let totalScore = 0;

for (const char of data) {
	if (char !== "\n" && char != " ") {
		round += char;
	} else if (char === "\n") {
		totalScore += outcomeLogic.get(round);
		round = "";
	}
}

console.log(`Total Score: ${totalScore}`);
