# bun-filter-repro

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```


# Issue
bun --filter ignores exitCode of child scripts and always exist with code: 0


This is also reproducible in terminal without using `$`
```bash
  zsh: bun --filter './packages/fail' test
      fail test $ bun run index.ts
      │ Fail!
      └─ Exited with code 1
  zsh: $?
  zsh: command not found: 0
```


This project was created using `bun init` in bun v1.1.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
