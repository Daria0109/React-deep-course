module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'airbnb', 'plugin:i18next/recommended',
		'plugin:storybook/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	ignorePatterns: ['**/build/**/*.*'],
	plugins: ['react', 'react-hooks', '@typescript-eslint', 'i18next'],
	rules: {
		'react/jsx-key': [2, { warnOnDuplicates: true }],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [1, 'tab'],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'react/react-in-jsx-scope': 0,
		'react/function-component-definition': [2, {
			namedComponents: 'arrow-function',
			unnamedComponents: 'arrow-function'
		}],
		'react-hooks/rules-of-hooks': 1,
		'react-hooks/exhaustive-deps': 1,
		'react/jsx-no-target-blank': 2,
		'react/jsx-closing-tag-location': 2,
		'react/jsx-curly-spacing': [1, {
			when: 'never',
			attributes: true,
			children: true
		}],
		'react/jsx-equals-spacing': [1, 'never'],
		'react/jsx-fragments': [1, 'syntax'],
		'react/display-name': 0,
		'react/no-children-prop': 2,
		'react/no-unknown-property': 2,
		'react/button-has-type': 2,
		'react/jsx-no-constructed-context-values': 2,
		'react/jsx-no-useless-fragment': [1, { allowExpressions: true }],
		'react/jsx-one-expression-per-line': [2, { allow: 'single-child' }],
		'react/jsx-props-no-spreading': 0,
		'react/jsx-tag-spacing': [1, {
			closingSlash: 'never',
			beforeSelfClosing: 'always',
			afterOpening: 'never',
			beforeClosing: 'never'
		}],
		'react/jsx-wrap-multilines': [1, {
			declaration: 'ignore',
			assignment: 'ignore',
			return: 'parens-new-line',
			arrow: 'parens-new-line',
			condition: 'parens-new-line',
			logical: 'parens-new-line',
			prop: 'ignore'
		}],
		'react/jsx-closing-bracket-location': 1,
		'react/no-multi-comp': 2,
		'react/require-default-props': 0,
		'react/self-closing-comp': [2, {
			component: true,
			html: true
		}],
		'react/style-prop-object': 2,
		'import/no-unresolved': 0,
		'import/prefer-default-export': 0,
		'import/extensions': [1, 'never', { lazy: 'always', scss: 'always' }],
		'import/no-extraneous-dependencies': 0,
		indent: [1, 'tab', { SwitchCase: 1 }],
		quotes: [2, 'single'],
		semi: [2, 'always'],
		'array-bracket-newline': [1, 'consistent'],
		'linebreak-style': [1, 'unix'],
		'max-len': [1, {
			code: 160,
			ignoreComments: true,
			ignoreTrailingComments: true
		}],
		'no-debugger': 2,
		'no-console': [1, { allow: ['warn', 'error'] }],
		'no-nested-ternary': 0,
		'no-self-compare': 2,
		'eol-last': [1, 'always'],
		'no-empty-pattern': 0,
		'no-extra-boolean-cast': 2,
		'no-extra-semi': 2,
		'no-case-declarations': 2,
		'no-undef': 0,
		'no-underscore-dangle': 0,
		'no-unsafe-optional-chaining': 2,
		'no-unused-vars': [1, {
			argsIgnorePattern: '_',
			varsIgnorePattern: '_'
		}],
		'no-duplicate-imports': 2,
		'no-promise-executor-return': 2,
		'no-tabs': [2, { allowIndentationTabs: true }],
		'no-template-curly-in-string': 2,
		'no-shadow': 0,
		'block-scoped-var': 2,
		curly: 1,
		'default-case': 2,
		'default-case-last': 2,
		'default-param-last': 2,
		'no-confusing-arrow': [2, {
			allowParens: true,
			onlyOneSimpleParam: true
		}],
		'no-mixed-spaces-and-tabs': 1,
		'no-unneeded-ternary': 2,
		'no-var': 2,
		'prefer-const': 2,
		'require-await': 2,
		yoda: [2, 'never'],
		'arrow-parens': 2,
		'arrow-spacing': [1, {
			before: true,
			after: true
		}],
		'brace-style': 1,
		'comma-dangle': [1, {
			arrays: 'never',
			objects: 'never',
			imports: 'never',
			exports: 'never',
			functions: 'never'
		}],
		'comma-spacing': 1,
		'computed-property-spacing': 1,
		'func-call-spacing': 1,
		'function-call-argument-newline': [1, 'consistent'],
		'function-paren-newline': [1, 'multiline-arguments'],
		'generator-star-spacing': [1, {
			before: false,
			after: true
		}],
		'jsx-quotes': [1, 'prefer-double'],
		'no-multi-spaces': 1,
		'no-multiple-empty-lines': [1, { max: 1 }],
		'object-curly-newline': [1, { consistent: true }],
		'object-curly-spacing': [1, 'always'],
		'padded-blocks': [1, {
			blocks: 'never',
			classes: 'always',
			switches: 'never'
		}],
		'i18next/no-literal-string': [2, { markupOnly: true, ignoreAttribute: ['data-testid', 'classNamePrefix', 'name', 'menuPlacement'] }],
		'@typescript-eslint/padding-line-between-statements': [1, {
			blankLine: 'always',
			prev: ['class', 'const', 'debugger', 'export', 'import', 'interface', 'let'],
			next: '*'
		}, {
			blankLine: 'any',
			prev: ['const', 'let', 'import', 'export'],
			next: ['const', 'let', 'import', 'export']
		}, {
			blankLine: 'never',
			prev: 'return',
			next: '*'
		}],
		'@typescript-eslint/array-type': [2, {
			default: 'array',
			readonly: 'array'
		}],
		'@typescript-eslint/explicit-function-return-type': 2,
		'@typescript-eslint/no-duplicate-enum-values': 2,
		'@typescript-eslint/member-ordering': [2, {
			default: {
				optionalityOrder: 'optional-first'
			}
		}],
		'@typescript-eslint/no-empty-interface': [2, { allowSingleExtends: true }],
		'@typescript-eslint/prefer-optional-chain': [2],
		'@typescript-eslint/sort-type-union-intersection-members': [2],
		'@typescript-eslint/type-annotation-spacing': [1],
		'@typescript-eslint/unified-signatures': [2],
		'@typescript-eslint/method-signature-style': [2, 'property'],
		'@typescript-eslint/naming-convention': [2, {
			selector: 'variable',
			format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
			leadingUnderscore: 'allowSingleOrDouble',
			trailingUnderscore: 'allowSingleOrDouble'
		}, {
			selector: 'typeLike',
			format: ['PascalCase']
		}],
		'@typescript-eslint/sort-type-constituents': 1
	},
	overrides: [{
		files: ['*.test.ts', '*.{test,stories}.tsx'],
		rules: {
			'i18next/no-literal-string': 0,
			'react/jsx-props-no-spreading': 0,
			'no-proto': 0
		}
	},
	{
		files: ['src/**/*Slice.ts'],
		rules: { 'no-param-reassign': ['error', { props: false }] }
	}],
	globals: {
		__IS_DEV__: true,
		__API__: true,
		JSX: true,
		__PROJECT__: true
	},
	reportUnusedDisableDirectives: true
};
