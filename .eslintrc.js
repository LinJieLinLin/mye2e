module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    // globle 
    env: {
        browser: true,
        element: true,
        it: true
    },
    // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
    extends: 'standard',
    // required to lint *.vue files

    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        //关 强制在 function的左括号之前使用一致的空格
        'space-before-function-paren': 0,
        // 关 句尾不用写“;”
        'semi': 1,
        // 关 不允许 var a,b 形式
        'one-var': 0,
        'global-strict': 0,
        //关 缩进
        'indent': 0
    }
};
