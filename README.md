# kelan

A plugin-based agent harness built on the [Cordis](https://github.com/cordiverse/cordis) plugin runtime.

Everything kelan can do is a plugin. The launcher builds a root context and mounts the
Loader; `cordis.yml` decides what gets loaded and how it is configured. Adding a
capability is an entry in that file, not a change to a code path.

## Requirements

Node `^22.19 || >=24`.

## Install

```sh
npm i -g kelanjs      # installs the `kelan` command
```

## Run from source

```sh
pnpm install
node bin/kelan.js "your task"
```

The composition resolves from the package root, so the command behaves the same from
any working directory.

## Layout

| Path | Role |
| --- | --- |
| `bin/kelan.js` | Launcher: root context, Loader, and the pointer to `cordis.yml` |
| `cordis.yml` | The composition — which plugins load, with what config |
| `src/plugins/` | kelan's own plugins |

## Status

Pre-alpha. The current composition mounts a placeholder plugin that echoes its task
positional. The model adapter, tool set, and session layers are not wired yet.

## License

MIT
