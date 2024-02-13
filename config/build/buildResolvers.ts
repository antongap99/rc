import {ResolveOptions} from "webpack";
import path from 'path';
import {BuildOptions} from "./types/config";
export const buildResolvers = (options: BuildOptions):ResolveOptions  => {
    return {
        extensions: ['.tsx', '.ts', '.js' ],
        modules: [options.paths.src, 'node_modules' ],
        preferAbsolute: true,
        mainFiles: ['index'],
        alias: { }
    }
}