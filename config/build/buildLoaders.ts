import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
	const styleLoader =  {
		test: /\.s[ac]ss$/i,
		use: [
			options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => resPath.includes(".module."),
						localIdentName: options.isDev
							? "[path][name]__[local]--[hash:base64:5]"
							: "[hash:base64:5]"
					}
					
				}
			},
			"sass-loader",
		],
	};
	
	const typeScriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};
	
	return [
		typeScriptLoader,
		styleLoader
	]
}
