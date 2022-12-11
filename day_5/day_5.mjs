import fs from "fs";
import { performance } from "perf_hooks";

const input = fs.readFileSync("day_5/input.txt", "utf8");
const [arrangement, procedure] = input.split("\n\n");
const t0 = performance.now();

const interval = 4;
const lineLength = arrangement.indexOf("\n");
let stacks = [];

for (let i = 0; i < (lineLength + 1) / interval; i++) {
  stacks.push([]);
}

for (let i = 0; i < arrangement.length; i++) {
  if (arrangement.at(i) === "\n") {
    for (let j = 0; j < (lineLength + 1) / interval; j++) {
      const start = j * interval + 1;
      const char = arrangement.slice(
        i - lineLength + start,
        i - lineLength + start + 1
      );
      if (char !== " ") stacks.at(j).unshift(char);
    }
  }
}

const moves = procedure.match(/\d+/g);


for (let i = 0; i < moves.length; i += 3) {
  stacks[moves[i + 2] - 1].push(...stacks[moves[i + 1] - 1].splice(moves[i] * -1));
}

for (const stack of stacks) {
  process.stdout.write(stack[stack.length - 1]);
}
process.stdout.write("\n");

console.log(performance.now() - t0, "milliseconds");
