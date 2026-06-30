# Changelog

All notable changes to `@nigelng/prettier-config` are documented here.

## [3.0.0] — unreleased

### Breaking

- Entry point converted from `index.json` to `index.js` (ESM). Consumers using `"prettier": "@nigelng/prettier-config"` in `package.json` continue to work; consumers who imported `index.json` directly must update to `prettier.config.mjs`.

### Added

- `react-native` sub-config (`@nigelng/prettier-config/react-native`) — overrides `printWidth: 100` and `jsxSingleQuote: true`
- `electron` sub-config (`@nigelng/prettier-config/electron`) — alias to base for explicitness
- `"type": "module"` and `exports` map in `package.json`
- `"description"` field in `package.json`

### Changed

- `peerDependencies` relaxed from `^3.8.3` to `>=3.0.0`
- `"files"` allowlist updated to `index.js`, `react-native.js`, `electron.js` (`.npmignore` removed — `files` takes precedence)

### Removed

- `index.json` — replaced by `index.js`
- `.babelrc` — was unused; nothing in this repo is transpiled
- `.eslintignore` — no ESLint config exists in this repo
- `.vscode/settings.json` — referenced a non-existent `shell.nix` and set `useFlakes: false` contrary to the Nix flake setup
- `.npmignore` — superseded by the `files` allowlist in `package.json`

### Formatting rules unchanged

All formatting values (`printWidth`, `semi`, `singleQuote`, `trailingComma`, etc.) are identical to 2.x.

---

## [2.0.0]

- Upgraded to Prettier 3
- Replaced deprecated `jsxBracketSameLine` with `bracketSameLine`
- Set `trailingComma: "es5"` explicitly (Prettier 3 default is `"all"`)

## [1.x]

- Prettier 2 era
