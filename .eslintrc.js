module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 4,
      "multiline": {
        "max": 4,
        "allowFirstLine": false
      }
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
}
