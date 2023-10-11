import { type BuildConfig } from './types/config'
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function buildDevServer (options: BuildConfig): DevServerConfiguration {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
