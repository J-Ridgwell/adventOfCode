import fs from "fs";
import { performance } from "perf_hooks";

const input = fs.readFileSync("day_4/input.txt", "utf8");
const t0 = performance.now();

const pairs = input.split("\n");
pairs.pop();

let numOfSubsets = 0;

for (const pair of pairs) {
	const [p0, p1] = pair.split(",");
	const [n0, n1] = p0.split("-");
	const [n2, n3] = p1.split("-");

	if (
		(Number(n0) <= Number(n2) && Number(n2) <= Number(n1)) ||
		(Number(n0) <= Number(n3) && Number(n3) <= Number(n1)) ||
		(Number(n2) <= Number(n0) && Number(n0) <= Number(n3)) ||
		(Number(n2) <= Number(n1) && Number(n1) <= Number(n3))
	) {
		numOfSubsets++;
	}
}

console.log(`Answer: ${numOfSubsets}`);
console.log(performance.now() - t0, "milliseconds");
