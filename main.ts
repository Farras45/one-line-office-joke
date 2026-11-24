// One-Line Office Joke: 24-Hour Sprint — make.fun entry.
// Writes the single-line office joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Node 22 stdlib only, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The office printer only breaks when something is urgent, which is how I know it reads the subject line.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} chars; the gate needs 1-200`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE + "\n", "utf8");
console.log(`wrote entry.txt (${JOKE.length} chars) to ${outDir}`);
