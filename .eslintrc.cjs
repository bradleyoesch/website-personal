module.exports = {
  env: {
    'browser': true,
    'es2021': true,
  },
  extends: [
    // 'google',
    'prettier',
    'plugin:prettier/recommended',
    'radish',
  ],
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  plugins: [
    'prettier'
  ],
  rules: {
    'camelcase': ['error', { 'ignoreDestructuring': true }],
    'quotes': [
        'error',
        'single'
    ],
  },
};

