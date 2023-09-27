import {ResolveOptions} from "webpack";
import {BuildConfig} from "./types/config";
export function buildResolves(options: BuildConfig): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules:[options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias:{},
    }
}