import { Configuration as DevServerConfiguration, WebpackConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true
    }
}