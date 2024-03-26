import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildPaths } from '../build/types/config';
import buildCssLoaders from '../build/loaders/buildCssLoaders';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: webpack.Configuration}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('ts', 'tsx');
    config.module?.rules?.push(buildCssLoaders({ isDev: true }));
    config.plugins?.push(new MiniCssExtractPlugin());

    // Убираем лоудер svg (default лоудер)
    if (config.module && config.module.rules) {
        config.module.rules = config.module.rules.map((rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return {
                    ...rule,
                    exclude: /.svg$/i,
                };
            }
            return rule;
        });
    }
    // Добавляю свой лоудер svg
    config.module?.rules?.push(buildSvgLoader());
    config.plugins?.push(new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
    }));

    return config;
};
