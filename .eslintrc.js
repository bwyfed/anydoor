
module.exports = {
  extends: 'eslint:recommended',  // 继承 eslint 推荐的规则
  env: {
    commonjs: true,
    es6: true,
    node: true,
    mocha: true
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script'
  },
  rules: {
    // 不许写 console.log，但允许 console.warn、console.error 和 console.info
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
