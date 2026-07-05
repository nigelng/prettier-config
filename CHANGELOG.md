# Changelog

All notable changes to `@nigelng/prettier-config` are documented here.

## [3.0.0] — 2026-07-05

### Breaking

- Entry point converted from `index.json` to `index.js` (ESM). Consumers using `"prettier": "@nigelng/prettier-config"` in `package.json` continue to work; consumers who imported `index.json` directly must update to `prettier.config.mjs`.
- `printWidth` changed from `88` to `100` — consumer codebases will reflow
- `trailingComma` changed from `"es5"` to `"all"` — consumer codebases will gain trailing commas in function calls/definitions
- Config reduced to only explicit overrides of Prettier 3 defaults (`printWidth`, `semi`, `singleQuote`, `trailingComma`); options that matched defaults were removed (`tabWidth`, `useTabs`, `quoteProps`, `bracketSpacing`, `jsxSingleQuote`, `bracketSameLine`, `arrowParens`, `endOfLine`) — behavior unchanged for these

### Added

- `react-native` sub-config (`@nigelng/prettier-config/react-native`) — overrides `jsxSingleQuote: true`
- `"type": "module"` and `exports` map in `package.json`
- `"description"` field in `package.json`
- `verify` CI workflow (`.github/workflows/verify.yml`) running `yarn format:check` on push/PR
- Dependabot config for `github-actions` and `npm` ecosystems (ignores `prettier` major bumps)
- `LICENSE` file (MIT)
- `package.json` scripts: `format` (`prettier --write .`), `format:check` (`prettier --check .`)
- `prettier.config.mjs` and `.prettierignore` for repo self-formatting
- `.nvmrc` (replaces Nix flake for Node version pinning)
- Inline `yarn format:check` step in the publish workflow before `yarn npm publish`

### Changed

- `peerDependencies` relaxed from `^3.8.3` to `>=3.0.0`
- `"files"` allowlist updated to `index.js`, `react-native.js` (`.npmignore` removed — `files` takes precedence)
- Yarn 4.16.0 → 4.17.0 (vendored release and `packageManager` pin)
- Prettier dev dependency 3.8.3 → 3.9.4
- GitHub Actions bumped to `actions/checkout@v7` and `actions/setup-node@v6`
- Publishing is now tag-triggered (`v*` tags) instead of push-to-main

### Removed

- `index.json` — replaced by `index.js`
- `.babelrc` — was unused; nothing in this repo is transpiled
- `.eslintignore` — no ESLint config exists in this repo
- `.vscode/settings.json` — referenced a non-existent `shell.nix` and set `useFlakes: false` contrary to the Nix flake setup
- `.npmignore` — superseded by the `files` allowlist in `package.json`
- `flake.nix`, `flake.lock`, `.envrc` — replaced by `.nvmrc` + Corepack (`packageManager` field)

---

## [2.0.0]

- Upgraded to Prettier 3
- Replaced deprecated `jsxBracketSameLine` with `bracketSameLine`
- Set `trailingComma: "es5"` explicitly (Prettier 3 default is `"all"`)

## [1.x]

- Prettier 2 era
