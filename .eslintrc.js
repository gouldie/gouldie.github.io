module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'prettier'
  ],
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react']
    },
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    requireConfigFile: false
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/issues/894
    'react/no-unescaped-entities': 0,
    'no-func-assign': 0
  }
}
