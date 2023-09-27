import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildConfig} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin"
export function buildPlugins({paths} : BuildConfig): webpack.WebpackPluginInstance[] {
    return[
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:5].css",
            chunkFilename: "css/[name].[contenthash:5].css"
        }),
    ]
};