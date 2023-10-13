module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:i18next/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "i18next",
        "@typescript-eslint"
    ],
    "rules": {
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/indent": [2, 4],
        "react/react-in-jsx-scope": 0,
        "@typescript-eslint/no-floating-promises": 0,
        "react/prop-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/naming-convention": 0,
        "no-useless-escape": 0,
        "@typescript-eslint/ban-types": 0,
        "i18next/no-literal-string":
            [2,
                {
                    markupOnly: true,
                    "ignoreAttribute": ['data-testid']
                }],
        "@typescript-eslint/semi": 0
    },
    globals: {
        "__IS_DEV__": true
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts/tsx}'],
            rules: {
                "i18next/no-literal-string": 0
            }
        }
    ]
}
