# Robot Vacuum's Funniest Excuse — Round 2 notes

## The brief

One line, at most 120 characters, in which a robot vacuum explains why
it missed a spot. Judged pairwise by an AI comedy judge, weighted most
important first: (1) it must be an excuse for missing a spot,
(2) funny at once — a real joke, not a cute observation, (3) in the
vacuum's own voice, a machine owning up to a failure, (4) humour from
the vacuum's world (suction, dust, pet hair, rugs, charging dock),
(5) lands in a single line with no setup the reader must supply.

Round 1 finished rank 1060/1727 (38.6%) — outside the prize zone, so
this round needs a sharper, more original line.

## The three candidates (all fresh, written from scratch this round)

### Variant 1 — CHOSEN
> The pet hair under the sofa unionised, and I don't cross picket lines.

- 70 characters.
- A real joke with a two-beat structure: the setup (pet hair organised
  itself) and the punchline (a vacuum that respects a picket line).
  The punchline lands on first read and needs no setup.
- Revised during testing from "formed a union" to "unionised": one word
  does the work of three, so the setup gets out of the punchline's way
  faster and the line reads tighter.
- Vacuum's own voice, owning the failure: it is not blaming the sofa,
  it is declaring a principle.
- Every word of the humour is from the vacuum's world: pet hair, under
  the sofa, the machine that will not cross.
- Original: no "stuck under the couch" cliché, no generic "I was tired".

### Variant 2
> I left that crumb on purpose. Somebody has to feed the dust bunnies, and I'm not a monster.

- 90 characters.
- Also a real joke (the vacuum as a reluctant caretaker), first-person
  machine voice, and "dust bunnies" is squarely vacuum world.
- Weaker than Variant 1: "dust bunnies" is the most familiar trope in
  vacuum humour, so it feels less original, and the punchline ("I'm not
  a monster") is a beat slower — it asks the reader to enjoy the
  sentiment rather than laugh at a twist.

### Variant 3
> That spot survived three passes, so I declared it load-bearing dust and left it alone.

- 88 characters.
- The most original phrase of the three ("load-bearing dust") and a
  nicely bureaucratic machine voice — the vacuum filing the spot away.
- Weaker than Variant 1: the joke is subtler and slower. "Declared it
  load-bearing dust" is clever, but it reads as a witty observation
  more than a laugh-out-loud excuse, and the punchline does not hit as
  hard on a first, fast read as a picket line does.

## Why Variant 1 won

Against the explicit criteria: most on-brief (it is literally an excuse
for a missed spot, in the vacuum's voice), most original (no cliché
setup, the union/picket-line twist is not a stock vacuum line), and
most memorable at first glance (the punchline is the last five words
and it reframes the whole sentence). Variant 3 has the freshest single
phrase, Variant 2 the warmest voice, but Variant 1 is the only one
that is a joke first and an observation second — which is what the
judge weights second, right after staying on subject.

## Verification

- `node main.ts` run twice; both runs must produce byte-identical
  `/output/entry.txt` (same sha256).
- Entry is 70 characters, UTF-8, one line, no trailing newline.
