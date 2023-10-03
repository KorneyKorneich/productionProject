import webpack from "webpack";
import {BuildConfig} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildLoaders(options: BuildConfig): webpack.RuleSetRule[]{

    const pngLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const svgLoader = {
        test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    }

    const sassLoaders = {

        test: /\.s[ac]ss$/i,
        use: [
            options.isDev
                ? "style-loader"
                : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options:{
                    modules:{
                        auto:(resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: options.isDev
                            ? '[path][name]__[local]--[hash:base64:4]'
                            : '[hash:base64:5]',
                    },
                },
            },

            "sass-loader",
        ],
    };


    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };
    return [
        typescriptLoaders,
        sassLoaders,
        svgLoader,
        pngLoader
    ]
}