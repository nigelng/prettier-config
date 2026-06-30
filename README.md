# @nigelng/prettier-config

Shared [Prettier](https://prettier.io) configuration for Nigel Nguyen projects.

See [sharing configurations](https://prettier.io/docs/configuration#sharing-configurations) for how Prettier resolves shared configs.

## Requirements

- **Node.js** 20 or newer
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

### Electron

In `prettier.config.mjs`:

```js
import config from '@nigelng/prettier-config/electron'
export default config
```

Electron projects use the same rules as web — this entry point exists for explicitness.

### Extending the base config

```js
import base from '@nigelng/prettier-config'
export default { ...base, semi: true }
```

## Options

| Option            | Value                             |
| ----------------- | --------------------------------- |
| `printWidth`      | `88` (`100` for React Native)     |
| `tabWidth`        | `2`                               |
| `useTabs`         | `false`                           |
| `semi`            | `false`                           |
| `singleQuote`     | `true`                            |
| `quoteProps`      | `"as-needed"`                     |
| `trailingComma`   | `"es5"`                           |
| `bracketSpacing`  | `true`                            |
| `jsxSingleQuote`  | `false` (`true` for React Native) |
| `bracketSameLine` | `false`                           |
| `arrowParens`     | `"always"`                        |
| `endOfLine`       | `"lf"`                            |

`trailingComma: "es5"` is set explicitly (Prettier 3 defaults to `"all"` if omitted).

## Develop

This repo uses [Yarn 4.16.0](https://yarnpkg.com/) (vendored under `.yarn/releases/`, matching `packageManager` in `package.json`) with `node-modules` linking. With [direnv](https://direnv.net/) and Nix, `use flake` from `flake.nix` provides Node 24 and that Yarn via `nixos-26.05` (pinned in `flake.lock`).

```bash
gh_token   # sets NODE_AUTH_TOKEN for the GitHub npm scope
yarn install
yarn install --immutable   # CI check
```

After changing `.envrc`, run `direnv allow` once.

Pushes to `main` publish `@nigelng/prettier-config` to GitHub Packages via the workflow in `.github/workflows/publish.yml`.

## Status

![Publish Package](https://github.com/nigelng/prettier-config/workflows/Publish%20Package/badge.svg?branch=main)
