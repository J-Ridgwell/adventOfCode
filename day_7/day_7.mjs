import fs from "fs";
import { performance } from "perf_hooks";

const input = fs.readFileSync("input.txt", "utf8").split("\n");
const t0 = performance.now();

class Node {
	parent;
	children = [];
	currDirectory;

	constructor(parent, size, currDir) {
		this.parent = parent;
		this.size = size;
		this.currDirectory = currDir;
	}

	addChild(node) {
		this.children.push(node);
	}
}

const root = new Node(null, null, "/");
let prev = root;
let curr = root;

for (const line of input) {
	if (line.includes("$ cd")) {
		const dir = line.slice(5);
		if (dir === "..") {
			curr = prev;
			prev = curr.parent;
			continue;
		}
		if (dir !== "/") {
			console.log((curr = `${curr.currDirectory}`));
			console.log((prev = `${prev.currDirectory}`));

			curr = new Node(prev, null, dir);

			curr.parent.addChild(curr);
			prev = curr.parent;
		}
		if (dir === "/") {
			curr = root;
		}
	}
}

// InOrderTraverse(root);

function InOrderTraverse(node) {
	if (node !== null) {
		for (const node of node.children) {
			InOrderTraverse(node);

			//Print the node
			console.log(node.key);
		}
	}
}
