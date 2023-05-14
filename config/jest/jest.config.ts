export default {
	globals: {
		__IS_DEV__: true,
		__API__: '',
		__PROJECT__: 'jest'
	},
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node'
	],
	moduleDirectories: ['node_modules'],
	moduleNameMapper: {
		'\\.(s?css)$': 'identity-obj-proxy',
		'entities/(.*)': '<rootDir>/src/entities/$1',
		'shared/(.*)': '<rootDir>/src/shared/$1'
	},
	modulePaths: ['<rootDir>src'],
	rootDir: '../../',
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)']
};
