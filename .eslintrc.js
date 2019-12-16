module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "extends": ["airbnb-base"],
    "settings": {
      "react": {
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "detect", // React version. "detect" automatically picks the version you have installed.
      }
    },
    rules: {
      "global-require": 1,
      "no-case-declarations": 0,
      "one-var": 0,
      "no-restricted-globals": 0,
      "quotes": 1,
      "jsx-quotes": ["error", "prefer-double"],
      "object-curly-newline": 0,
      "quote-props": 0,
      "react/prop-types": 2,
      "react/no-unused-prop-types": "warn",
      "no-param-reassign": 0, // https://eslint.org/docs/rules/no-param-reassign
      "class-methods-use-this": 0, // https://eslint.org/docs/rules/class-methods-use-this : render() {
      "prefer-destructuring": ["error", { "object": true, "array": false }], // http://eslint.org/docs/rules/prefer-destructuring : key = pathName.split("/")[1];
      "no-unused-expressions": ["error", { "allowShortCircuit": true }], // http://eslint.org/docs/rules/no-unused-expressions
      "import/extensions": 0,
      "import/no-unresolved": 0,
      "import/prefer-default-export": 0,
      "comma-dangle": ["error", "always-multiline"],
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "arrow-parens": ["error", "always"],
      "import/no-extraneous-dependencies": [2, { devDependencies: true }],
      "import/no-dynamic-require": 0,
      "no-debugger": 2,
      "no-console": 2,
      "no-underscore-dangle": 0,
      "no-mixed-operators": 0, // 根据项目实际情况定义
      "no-empty": [2, {
        "allowEmptyCatch": true
      }],
      "camelcase": 0,
      "max-len": [1, {
        "code": 100,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreRegExpLiterals": true,
        "ignoreTrailingComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignorePattern": "^(\\s*[a-zA-Z_]+: '[^']+'[,;]*)|(.*gettext.*)|(.*interpolate.*)|(.*require.*)|(.*_\\.template.*)$"
      }],
      "no-plusplus": 0,
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/require-default-props": 0,
      "react/no-find-dom-node": 0,
      "react/jsx-one-expression-per-line": 0,
      "react/jsx-wrap-multilines": [1, {
        "declaration": "ignore",
        "assignment": "ignore",
        "condition": "ignore",
        "logical": "ignore",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "prop": "parens-new-line"
      }],
      "react/sort-comp": [1, {
        order: [
          "static-methods",
          "lifecycle",
          "/^get.+$/",
          "/^set.+$/",
          "/^on.+$/",
          "/^handle.+$/",
          "everything-else",
          "/^render.+$/",
          "render"
        ]
      }],
      "react/jsx-closing-bracket-location": [1],
      "jsx-a11y/click-events-have-key-events": 0,
      "jsx-a11y/no-static-element-interactions": 0,
      "jsx-a11y/label-has-for": 0,
      "jsx-a11y/no-noninteractive-element-interactions": 0,
      "indent": ["error", 2, { "SwitchCase": 1 }]
    },
};
