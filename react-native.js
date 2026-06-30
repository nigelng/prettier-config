import base from './index.js'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...base,
  printWidth: 100,
  jsxSingleQuote: true,
}

export default config
