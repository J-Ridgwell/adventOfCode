import fs from "fs";
import { performance } from "perf_hooks";

const input = fs.readFileSync("day_5/input.txt", "utf8");
const t0 = performance.now();

const [arrangement, procedure] = input.split("\n\n");
const interval = 4;
const lineLength = arrangement.indexOf("\n");
let stacks = [];

for (let i = 0; i < (lineLength + 1) / interval; i++) {
	stacks.push([]);
}

for (let i = 0; i < arrangement.length; i++) {
	if (arrangement.at(i) === "\n") {
		for (let j = 0; j < (lineLength + 1) / interval; j++) {
			const start = j * interval;
			stacks.at(j).unshift(arrangement.slice(i - lineLength + start, i - lineLength + start + 3));
		}
	}
}

console.log(stacks);
