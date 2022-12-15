import fs from "fs";
import { performance } from "perf_hooks";

const input = fs.readFileSync("input.txt", "utf8").split("\n");
input.pop();
const t0 = performance.now();

class Node {
	constructor(parent, size, fileName) {
		this.parent = parent;
		this.size = size;
		this.fileName = fileName;
		this.children = [];
	}

	addChild(node) {
		console.log(`Adding ${node.fileName} to ${this.fileName}`);
		this.children.push(node);
	}
	getChild(fileName) {
		if (fileName === "..") return this.parent;
		const child = this.children.find((elem) => (elem.fileName = fileName));
		// console.log(`CD-ing into ${child?.fileName}`);
		return child ? child : this;
	}
}

const root = new Node(null, null, "/");
let curr = root;

for (const line of input) {
	if (line.at(0) === "$") {
		if (line.includes("cd")) {
			// console.log(`before cd: ${curr.fileName}`);
			curr = curr.getChild(line.substring(5));
			// console.log(`after cd: ${curr.fileName}`);
		}
	} else {
		const [dirOrFileSize, fileName] = line.split(" ");
		const currChild = new Node(curr, Number(dirOrFileSize), fileName);
		// console.log(currChild.size, currChild.fileName);
		curr.addChild(currChild);
	}
}

let totalSize = 0;
InOrderTraverse(root);

function InOrderTraverse(node) {
	if (node) {
		for (const child of node.children) {
			InOrderTraverse(child);

			//Print the node
			if (child.size <= 100000) {
				// this is wrong
				totalSize += child.size;
			}
		}
	}
}

console.log(`Answer: ${totalSize}`);
