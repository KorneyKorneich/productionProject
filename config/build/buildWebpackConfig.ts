import { type BuildConfig } from './types/config'
import type webpack from 'webpack'
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from './buildLoaders'
import { buildResolves } from './buildResolves'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildConfig): webpack.Configuration {
    const { paths, mode, isDev } = options

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name]-[contenthash].js',
            path: paths.build,
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        resolve: buildResolves(options),
        devServer: isDev ? buildDevServer(options) : undefined

    }
}
