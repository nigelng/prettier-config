# @nigelng/prettier-config

Shared [Prettier](https://prettier.io) configuration for Nigel Nguyen projects.

See [sharing configurations](https://prettier.io/docs/configuration#sharing-configurations) for how Prettier resolves shared configs.

## Requirements

- **Node.js** 20 or newer
- **Prettier** 3.8.3 or newer (`^3.8.3`)

Version **1.x** of this package targets Prettier 2. Stay on 1.x until you upgrade Prettier in your project.

## Install

```bash
yarn add -D prettier @nigelng/prettier-config
```

## Use

In `package.json`:

```json
{
  "prettier": "@nigelng/prettier-config"
}
```

Or in `.prettierrc.json`:

```json
"@nigelng/prettier-config"
```

## Options

The published config keeps the same formatting choices as the 1.x line, including `trailingComma: "es5"` (Prettier 3 defaults to `"all"` if omitted) and `bracketSameLine: false` (renamed from the deprecated `jsxBracketSameLine`).

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
