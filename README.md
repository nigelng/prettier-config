# @nigelng/prettier-config

Shared [Prettier](https://prettier.io) configuration for Nigel Nguyen projects.

See [sharing configurations](https://prettier.io/docs/configuration#sharing-configurations) for how Prettier resolves shared configs.

## Requirements

- **Node.js** 24 or newer
- **Prettier** 3.0.0 or newer (`>=3.0.0`)

Version **1.x** targets Prettier 2. Version **2.x** targets Prettier 3 with a JSON entry point. Stay on 2.x if you cannot migrate to ESM imports.

## Install

```bash
yarn add -D prettier @nigelng/prettier-config
```

## Use

### Web (default)

In `package.json`:

```json
{
  "prettier": "@nigelng/prettier-config"
}
```

### React Native

In `prettier.config.mjs`:

```js
import config from '@nigelng/prettier-config/react-native'
export default config
```

Or extend and override:

```js
import base from '@nigelng/prettier-config/react-native'
export default { ...base, printWidth: 120 }
```

### Extending the base config

```js
import base from '@nigelng/prettier-config'
export default { ...base, semi: true }
```

## Options

Only options that override Prettier 3 defaults are set. All other options use Prettier 3 defaults.

| Option           | Value                             |
| ---------------- | --------------------------------- |
| `printWidth`     | `100`                             |
| `semi`           | `false`                           |
| `singleQuote`    | `true`                            |
| `trailingComma`  | `"all"`                           |
| `jsxSingleQuote` | `false` (`true` for React Native) |

## Develop

This repo uses [Yarn 4.17.0](https://yarnpkg.com/) (vendored under `.yarn/releases/`, matching `packageManager` in `package.json`) with `node-modules` linking. Node 24 is pinned via `.nvmrc`; Yarn is pinned via `packageManager` (Corepack).

```bash
gh_token   # sets NODE_AUTH_TOKEN for the GitHub npm scope
yarn install
yarn install --immutable   # CI check
```

Pushes to `main` and pull requests run the `verify` workflow (`.github/workflows/verify.yml`) — `yarn format:check`.

To publish a new version:

1. Bump `version` in `package.json` and update `CHANGELOG.md` (change `— unreleased` to the date).
2. Commit and push to `main`. Wait for `verify` to pass.
3. `git tag v<version> && git push origin v<version>` — this triggers the `publish` workflow (`.github/workflows/publish.yml`), which runs `yarn format:check` then `yarn npm publish` to GitHub Packages.

## Status

![Verify](https://github.com/nigelng/prettier-config/workflows/Verify/badge.svg?branch=main)
