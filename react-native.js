import base from './index.js'

/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const config = {
  ...base,
  jsxSingleQuote: true,
}

export default config
