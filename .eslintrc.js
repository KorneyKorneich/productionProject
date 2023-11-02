module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "standard-with-typescript",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    "plugins": [
        "react",
        "i18next",
        "@typescript-eslint",
        "eslint-plugin-react-hooks"
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
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error",
        "@typescript-eslint/no-var-requires": 0,
        "i18next/no-literal-string":
            [2,
                {
                    markupOnly: true,
                    "ignoreAttribute": ['data-testid']
                }],
        "@typescript-eslint/semi": 0,
        "react/display-name": 0
    },
    globals: {
        "__IS_DEV__": true,
        "__API__": true
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts/tsx}'],
            rules: {
                "i18next/no-literal-string": 0
            }
        }
    ],

}
