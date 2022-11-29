module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 1,
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/function-component-definition': 0,
        'import/no-unresolved': 0,
        'import/prefer-default-export': 0,
        'no-unused-vars': 1,
        'no-tabs': 0,
        indent: [2, 4],
        'react/require-default-props': 0,
        'react/react-in-jsx-scope': 0,
        'no-shadow': 0,
        'import/extensions': [1, 'never'],
        'import/no-extraneous-dependencies': 0,
        'no-mixed-spaces-and-tabs': 2,
        'no-underscore-dangle': 0,
    },
    globals: {
        __IS_DEV__: true,
        JSX: true,
    },
};
