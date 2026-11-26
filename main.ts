// Make the AI Judge Laugh — one office joke, written to /output/entry.txt.
//
// The joke is a single line about office life, under 200 characters,
// deterministic: the same line is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I've typed 'per my last email' so often that Outlook now autocompletes it before I even finish the insult.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputFile = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, JOKE, "utf8");
