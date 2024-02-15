import webpack from "webpack";
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from "./types/config";
export const buildLoaders = ({isDev}:BuildOptions):webpack.RuleSetRule[]=> {

    const assetsLoader = {
        test: /\.(png|jpg|jpeg|svg|webp)/,
        type: 'asset/resource',
    }


    // Важен порядок загрузки лоудеров
    const typescriptLoader = {
        test: /\.tsx?/i,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const scssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                MiniCssExtractPlugin.loader, // заменяем style-loader
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                            localIdentName: isDev ? '[path][name]__[local]': '[hash:base64:8]'
                        },  // использование style.module.css
                    },
                },
                // Compiles Sass to CSS
                "sass-loader",
            ],
        }


    return [
        typescriptLoader,
        scssLoader,
        assetsLoader
    ]
}