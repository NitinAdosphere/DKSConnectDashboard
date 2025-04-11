module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        'no-useless-catch': 0,
        'no-console': 'warn',
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'comma-dangle': ['error', 'never'], // Add this rule for trailing commas
    },
}
