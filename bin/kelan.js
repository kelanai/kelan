#!/usr/bin/env node
// Launcher. Builds the root Cordis context and hands composition to cordis.yml.
// Relative plugin specifiers in that file resolve from the package root, so the
// CLI composes identically no matter which directory it is invoked from.

import { Context } from '@deepseek-ai/cordis'
import Loader from '@deepseek-ai/cordis-plugin-loader'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const ctx = new Context()
ctx.baseUrl = pathToFileURL(packageRoot).href + '/'

await ctx.plugin(Loader)
await ctx.loader.create({
  name: '@deepseek-ai/cordis-plugin-include',
  config: { path: './cordis.yml' },
})
