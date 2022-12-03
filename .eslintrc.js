module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:i18next/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next'
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 1,
		'@typescript-eslint/padding-line-between-statements': [
			1,
			{
				blankLine: 'always',
				prev: [
					'class',
					'const',
					'debugger',
					'export',
					'import',
					'interface',
					'let',
					'var'
				],
				next: '*'
			},
			{
				blankLine: 'any',
				prev: [
					'const',
					'let',
					'var',
					'import',
					'export'
				],
				next: [
					'const',
					'let',
					'var',
					'import',
					'export'
				]
			},
			{
				blankLine: 'never',
				prev: ['return'],
				next: '*'
			}
		],
		'@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }],
		'@typescript-eslint/explicit-function-return-type': 1,
		'@typescript-eslint/no-duplicate-enum-values': 1,
		'@typescript-eslint/explicit-member-accessibility': [
			1,
			{
				overrides: {
					constructors: 'no-public'
				}
			}
		],
		'@typescript-eslint/member-ordering': [1],
		'@typescript-eslint/no-empty-interface': [
			1,
			{
				allowSingleExtends: true
			}
		],
		// "@typescript-eslint/prefer-includes": [1],
		// "@typescript-eslint/prefer-nullish-coalescing": [2],
		'@typescript-eslint/prefer-optional-chain': [2],
		// "@typescript-eslint/prefer-readonly": [1],
		// "@typescript-eslint/prefer-string-starts-ends-with": [1],
		// "@typescript-eslint/require-array-sort-compare": [1],
		'@typescript-eslint/sort-type-union-intersection-members': [1],
		'@typescript-eslint/type-annotation-spacing': [2],
		'@typescript-eslint/unified-signatures': [1],
		'react/prop-types': 0,
		'react/display-name': 1,
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-props-no-spreading': 1,
		'react/jsx-filename-extension': [
			1, {
				extensions: [
					'.js', '.jsx', '.ts', '.tsx'
				]
			}
		],
		'react/function-component-definition': 0,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'no-unused-vars': 0,
		'no-tabs': 0,
		indent: [
			1, 'tab', { SwitchCase: 1 }
		],
		quotes: ['error', 'single'],
		'react/require-default-props': 0,
		'react/react-in-jsx-scope': 0,
		'no-shadow': 0,
		'import/extensions': [1, 'never'],
		'import/no-extraneous-dependencies': 0,
		'no-mixed-spaces-and-tabs': 2,
		'no-underscore-dangle': 0,
		'i18next/no-literal-string': [2, { markupOnly: true }],
		'object-curly-spacing': [2, 'always'],
		'comma-dangle': [
			'error', {
				arrays: 'never',
				objects: 'never',
				imports: 'never',
				exports: 'never',
				functions: 'never'
			}
		],
		'brace-style': 2,
		'comma-spacing': ['error', { before: false, after: true }],
		'no-self-compare': 2,
		'func-names': ['error', 'as-needed'],
		yoda: [2, 'never'],
		'array-bracket-newline': [2, { multiline: true, minItems: 3 }],
		'eol-last': [2, 'always'],
		'max-len': [2, { code: 100, ignoreComments: true }],
		'function-paren-newline': 0,
		'no-debugger': 2,
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'no-template-curly-in-string': 2,
		'default-param-last': [2],
		'padding-line-between-statements': [2, { blankLine: 'always', prev: '*', next: 'return' }],
		'padded-blocks': [
			1,
			{
				blocks: 'never',
				classes: 'always',
				switches: 'never'
			}
		],
		'linebreak-style': [1, 'unix'],
		semi: [1, 'always'],
		'no-multiple-empty-lines': [1, { max: 1 }]
	},
	globals: {
		__IS_DEV__: true,
		JSX: true
	}
};

// {
// 	"env": {
// 	"browser": true,
// 		"es2021": true,
// 		"node": true
// },
// 	"extends": [
// 	"eslint:recommended",
// 	"plugin:react/recommended",
// 	"plugin:@typescript-eslint/recommended"
// ],
// 	"parser": "@typescript-eslint/parser",
// 	"parserOptions": {
// 	"ecmaFeatures": {
// 		"jsx": true
// 	},
// 	"ecmaVersion": "latest",
// 		"sourceType": "module",
// 		"project": "./tsconfig.json"
// },
// 	"ignorePatterns": [
// 	"**/dist/**/*.*",
// 	"**/lib/**/*.*",
// 	"jest.config.js",
// 	"webpack.*.js"
// ],
// 	"plugins": [
// 	"react",
// 	"@typescript-eslint"
// ],
// 	"rules": {
// }
// }
