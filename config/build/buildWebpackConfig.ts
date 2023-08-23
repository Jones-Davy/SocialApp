import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from "./types/config";
import { BuildDevServer } from './BuildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration{
    const {paths, mode, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
          filename: '[name].[contenthash].js',
          path: paths.build,
          clean: true,
        },
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        plugins: buildPlugins(options),
        devtool: isDev? 'inline-source-map' : undefined,
        devServer: isDev ? BuildDevServer(options) : undefined,
      };
}