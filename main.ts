import { mkdirSync, writeFileSync } from "node:fs";

// One-Line Laugh-Off: exactly one funny line, 1-200 chars, single line.
// Chosen line (candidate B of 3 — see report for the other two):
// "I put 'excellent communicator' on my résumé — my references all replied 'who is this?'"
// The setup brags; the punchline has the references themselves contradict it.
const LINE = "I put 'excellent communicator' on my résumé — my references all replied 'who is this?'";

// Gate guard: the sealed scorer only accepts 1-200 chars, one line, non-blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line fails gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outDir}/entry.txt`);
