import { $ } from 'bun'

$.throws(true)

const { exitCode } = await $`bun --filter './packages/*' test`

console.log('Exit code:', exitCode)
