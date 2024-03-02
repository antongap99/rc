import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/config';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = {
        test: /\.(js | ts | tsx )$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en '],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    // Важен порядок загрузки лоудеров
    const typescriptLoader = {
        test: /\.tsx?/i,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            MiniCssExtractPlugin.loader, // заменяем style-loader
            // Translates CSS into CommonJS
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
                    }, // использование style.module.css
                },
            },
            // Compiles Sass to CSS
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: true,
                },
            },
        ],
    };

    return [
        babelLoader,
        typescriptLoader,
        scssLoader,
        svgLoader,
    ];
};
