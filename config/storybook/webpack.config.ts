import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	};

	config.resolve!.modules!.unshift(paths.src);
	config.resolve!.extensions!.push('.ts', '.tsx');

	const rules = config.module!.rules as RuleSetRule[];

	// eslint-disable-next-line no-param-reassign
	config.module!.rules = rules.map((rule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/i };
		}

		return rule;
	});

	config.module!.rules.push({
		test: /\.svg$/,
		use: ['@svgr/webpack']
	});
	config.module!.rules.push(buildCssLoader(true));

	config.plugins!.push((new webpack.DefinePlugin({
		__IS_DEV__: true,
		__API__: JSON.stringify('')
	})));

	return config;
};
