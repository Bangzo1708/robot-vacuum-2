// main.ts — The Robot Vacuum's Funniest Excuse (round 2 entry)
//
// The program writes exactly one line to /output/entry.txt: the excuse
// a robot vacuum gives for missing a spot. The run is fully
// deterministic — one fixed string, no randomness, no clock, no network,
// no input files — so every run produces the same bytes.
//
// The excuse was chosen from three candidates drafted for this round
// (see NOTES.md). The winner:
//
//   "The pet hair under the sofa unionised, and I don't cross
//    picket lines."
//
// Why this one: it is a real joke with a punchline that lands on the
// first read, it speaks in the vacuum's own voice, and every word of
// its humour comes from the vacuum's world — pet hair, the sofa it
// hides under, the machine that refuses to cross a picket line.
// "Unionised" says in one word what "formed a union" took three to
// say, so the setup gets out of the punchline's way faster.

import { mkdirSync, writeFileSync } from "node:fs";

// The chosen excuse. One line, well inside the gate of 1..120
// characters, plain UTF-8, no trailing newline (the gate counts every
// character in the file, so nothing extra is written).
const EXCUSE: string =
  "The pet hair under the sofa unionised, and I don't cross picket lines.";

// Guard the gate ourselves before writing: if the line ever drifted
// outside 1..120 characters, or became whitespace only, fail loudly
// instead of submitting an entry the scorer would refuse.
if (EXCUSE.length < 1 || EXCUSE.length > 120) {
  throw new Error(
    `excuse is ${EXCUSE.length} characters, outside the 1..120 gate`,
  );
}
if (EXCUSE.trim().length === 0) {
  throw new Error("excuse is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
