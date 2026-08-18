export const name = 'kelan-hello'

/**
 * Placeholder surface: echoes the task positional so the CLI contract is
 * exercised end to end before any model plugin is mounted.
 *
 * @param ctx — the plugin's Cordis context.
 */
export function apply(ctx) {
  const task = process.argv.slice(2).join(' ')
  console.log(task ? `kelan received task: ${task}` : 'kelan is running (no task given)')
}
