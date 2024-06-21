import type { Config } from 'jest'

const config: Config = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^@vue/test-utils': '<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js',
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'vue',
    'json',
  ],
  transform: {
    '^.+\\.(js|ts)$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest',
  },
}

module.exports = config
