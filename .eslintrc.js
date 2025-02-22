module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'airbnb/rules/react',
    'prettier',
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
  ],
  plugins: ['babel', 'import', 'react', 'prettier'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'prefer-destructuring': 0,
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-new': 0,
    'react/style-prop-object': 0,
    'react/jsx-no-bind': 0,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['utils', './src/utils'],
          ['public', './public'],
          ['@app/components/*', './src/app/components'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json'],
      },
    },
  },
};
