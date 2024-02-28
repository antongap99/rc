import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin, {PluginOptions} from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
export const buildPlugins  = ({paths, isDev}: BuildOptions):webpack.WebpackPluginInstance[] =>  {
    const plagins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin({
            entries: true,
            modules: true,
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
            chunkFilename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
        } as PluginOptions),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),

    ]

    isDev && plagins.push(new ReactRefreshWebpackPlugin())

    return plagins
}