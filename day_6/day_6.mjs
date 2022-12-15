import fs from "fs";
import { performance } from "perf_hooks";

const input = fs.readFileSync("day_6/input.txt", "utf8");
const t0 = performance.now();

p2();

function p2() {
	const window = new Map();
	const windowSize = 14;
	let l = 0;
	let r = 0;

	while (l < input.length - windowSize) {
		if (window.size === windowSize) {
			break;
		}

		if (!window.has(input.at(r))) {
			window.set(input.at(r), r);
		} else {
			l = window.get(input.at(r)) + 1;
			for (const [key, value] of window.entries()) {
				if (value === l) break;
				window.delete(key);
			}
			window.set(input.at(r), r);
		}

		++r;
	}

	console.log(performance.now() - t0);
	console.log(`Answer: ${r}`);
}

function p1() {
	let endOfStartCode;

	for (let i = 3; i < input.length; ++i) {
		if (
			input[i - 3] != input[i - 2] &&
			input[i - 3] != input[i - 1] &&
			input[i - 3] != input[i] &&
			input[i - 2] != input[i - 1] &&
			input[i - 2] != input[i] &&
			input[i - 1] != input[i]
		) {
			endOfStartCode = i + 1;
			break;
		}
	}
	console.log(performance.now() - t0);
	console.log(`Answer: ${endOfStartCode}`);
}
