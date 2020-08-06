module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint', // Babel features not supported by ESLint.
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  ignorePatterns: ['bundle.js'],
  plugins: ['react', 'prettier'],
  rules: {
    'comma-dangle': 0, // disallow trailing commas
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // Allow JSX in files js and jsx.
    'react/jsx-uses-vars': 1, // This rule will find variables used in JSX and mark them as used. The no-unused-vars rule is required
    'react/display-name': 1, // utility to return a react components display name
    'class-methods-use-this': 'off', // This rule is aimed to flag class methods that do not use this.
    'no-param-reassign': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
