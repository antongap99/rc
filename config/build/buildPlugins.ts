import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin, {PluginOptions} from 'mini-css-extract-plugin'
export const buildPlugins  = ({paths, isDev}: BuildOptions):webpack.WebpackPluginInstance[] =>  {
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin({
            entries: true,
            modules: true,
        }),
        new MiniCssExtractPlugin({
           filename: 'css/[name].[contenthash:8].css',
           chunkFilename: 'css/[name].[contenthash:8].css'
        } as PluginOptions),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]
}