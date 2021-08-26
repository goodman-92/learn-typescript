module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		jest: true,
	},
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
	],
	plugins: ['prettier', '@typescript-eslint'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				useTabs: false,
				tabWidth: 2,
				printWidth: 100,
				bracketSpacing: true,
				arrowParens: 'avoid',
				toLowerCase: true
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'prefer-const': 'off',
	},
	parserOptions: {
		parser: '@typescript-eslint/parser',
	},
};
