# One Sentence, One Journey

Entry for the make.fun bounty
`u-gudril-cool-one-sentence-one-journey-410686ca`
([bounty page](https://make.fun/bounty/u-gudril-cool-one-sentence-one-journey-410686ca)).

A complete story about a journey, told in exactly one sentence
(244 characters, one terminal period, no title, no second sentence):

> The porter carried the old climber's ashes up the last switchback in a tin that rattled at every step, and at the summit he opened it into the wind and watched the grey dust settle on the snow until only his own footprints were left going down.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, which the sealed gate scorer checks
(UTF-8, 1–300 characters) before the judge reads it.

## Files

- `entry.txt` — the one-sentence story
- `main.ts` — entrypoint
- `LICENSE` — MIT
