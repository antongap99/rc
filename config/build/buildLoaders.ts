import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import buildCssLoaders from "./loaders/buildCssLoaders";

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

    const scssLoader = buildCssLoaders({isDev})

    return [
        babelLoader,
        typescriptLoader,
        scssLoader,
        svgLoader,
    ];
};
