module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 0,
    'no-console': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': 'error',
    'react/require-default-props': 'off',
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
};
