import fs from "fs";
import { performance } from "perf_hooks";

const data = fs.readFileSync("day_3/input.txt", "utf8");
const t0 = performance.now();
const rucksacks = data.split("\n");
let priorities = [];

part2();

function part2() {
	let group = [];
	for (const [i, rucksack] of rucksacks.entries()) {
		group.push(new Set(rucksack.split("")));
		if ((i + 1) % 3 === 0) {
			for (const char of group.at(0)) {
				if (group.at(1).has(char) && group.at(2).has(char)) {
					priorities.push(char);
					group = [];
					break;
				}
			}
		}
	}
}

function part1() {
	for (const rucksack of rucksacks) {
		const compartment = rucksack.slice(0, rucksack.length / 2);
		const compartment1 = new Set(rucksack.slice(rucksack.length / 2).split(""));

		for (const char of compartment) {
			if (compartment1.has(char)) {
				priorities.push(char);
				break;
			}
		}
	}
}

const sum = priorities.reduce((accum, curr) => {
	const charCode = curr.charCodeAt(0);
	if (charCode < 97) {
		return accum + charCode - 38;
	} else {
		return accum + charCode - 96;
	}
}, 0);

console.log(`Answer: ${sum}`);
console.log(performance.now() - t0, "milliseconds");
