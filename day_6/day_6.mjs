import fs from "fs";
import { performance } from "perf_hooks";

const input = fs.readFileSync("day_6/input.txt", "utf8");
const t0 = performance.now();

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
// part 1 complete