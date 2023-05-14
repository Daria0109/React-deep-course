import path from 'path';
import 'webpack-dev-server';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		build: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src')
	};

	const mode = env.mode || 'development';
	const PORT = env.port || 3000;
	const analyze = env.analyze || false;
	const apiUrl = env.apiUrl || 'http://localhost:3001';

	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		analyze,
		apiUrl,
		project: 'frontend'
	});
};
