module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
    'plugin:testing-library/react',
  ],
  overrides: [],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-unused-state': 0,
    'react/forbid-prop-types': 0,
  },
};
