// Entry point for the make.fun "One Sentence, One Journey" bounty.
// Node 22, standard library only: copies entry.txt into the output
// directory the harness provides via MAKEFUN_OUTPUT_DIR.
import { copyFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "entry.txt"), join(outDir, "entry.txt"));
console.log("entry.txt written to " + outDir);
