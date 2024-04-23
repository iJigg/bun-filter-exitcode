import { $ } from 'bun'

$.throws(true)

const { exitCode } = await $`bun --filter './packages/*' test`

console.log('Exit code:', exitCode)

/* 
  This is also reproducible in terminal without using $;

  zsh: bun --filter './packages/fail' test
      fail test $ bun run index.ts
      │ Fail!
      └─ Exited with code 1
  zsh: $?
  zsh: command not found: 0

*/