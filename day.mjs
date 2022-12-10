import fs from "fs";
import { performance } from "perf_hooks";

class Day {
	t0;
	t1;

	day(filePath) {
		this.input = fs.readFileSync(filePath, "utf8");
	}

	part1() {
		t0 = performance.now();
	}
}
