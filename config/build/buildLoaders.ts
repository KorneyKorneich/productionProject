import type webpack from 'webpack'
import { type BuildConfig } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders (options: BuildConfig): webpack.RuleSetRule[] {
    const pngLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract',
                        {
                            locales: ['en', 'ru']
                        }
                    ]
                ]
            }
        }
    }

    const sassLoaders = buildCssLoader(options.isDev);

    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
    return [
        babelLoader,
        typescriptLoaders,
        sassLoaders,
        svgLoader,
        pngLoader
    ]
}
