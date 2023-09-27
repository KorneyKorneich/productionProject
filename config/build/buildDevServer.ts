import {BuildConfig} from "./types/config";
import {Configuration as DevServerConfiguration} from "webpack-dev-server";

export function buildDevServer(options: BuildConfig): DevServerConfiguration {
    return {
       port: options.port,
       open: true,
        historyApiFallback: true,
    }
}