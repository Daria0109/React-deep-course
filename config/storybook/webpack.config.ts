import webpack from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }): webpack.Configuration => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src')
	};

	config.resolve.modules.push(paths.src);
	config.resolve.extensions.push('.ts', '.tsx');

	return config;
};
