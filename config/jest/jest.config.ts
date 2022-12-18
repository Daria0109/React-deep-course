export default {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: ['/node_modules/'],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node'
	],
	moduleDirectories: ['node_modules'],
	moduleNameMapper: { '\\.(s?css)$': 'identity-obj-proxy' },
	modulePaths: ['<rootDir>src'],
	preset: 'ts-jest',
	rootDir: '../../',
	setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
	testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)']
};
