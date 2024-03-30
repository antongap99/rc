module.exports = {
    env: {
        browser: true,
        es2021: true,
        'jest/globals': true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jest',
        'i18next',
        'react-hooks',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
    ignorePatterns: ['jest.config.ts'],
    rules: {
        indent: ['error', 4],
        'react/jsx-indent': ['error', 4, { indentLogicalExpressions: true }],
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/jsx-indent-props': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'react/function-component-definition': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'warn',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-unused-expressions': 'off',
        'no-underscore-dangle': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'max-len': [
            'error',
            {
                code: 100,
                ignoreUrls: true,
                ignoreComments: true,
            },
        ],
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': 'off',
        'i18next/no-literal-string': [
            'error',
            { markupOnly: true, onlyAttribute: ['data-testid'], ignoreAttribute: ['to'] },
        ],
        'no-param-reassign': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
		'jsx-a11y/click-events-have-key-events': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'no-use-before-define': 'off'
    },
    globals: {
        __IS_DEV__: true,
        React: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts, tsx}'], // для файлов, которые матчатся будут переопределены правила
            rules: {
                'i18next/no-literal-string': 'off',
				"max-len": 'off'
			},
        },
    ],
};
