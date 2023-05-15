import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{ loader: 'file-loader' }
		]
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack']
	};
	
	const babelLoader = buildBabelLoader(options);
	
	const cssLoader = buildCssLoader(options.isDev);

	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/
	};

	return [
		fileLoader,
		svgLoader,
		babelLoader,
		typeScriptLoader,
		cssLoader
	];
}
