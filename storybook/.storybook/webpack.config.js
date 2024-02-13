const CopyPlugin = require('copy-webpack-plugin');

module.exports = async ({ mode, config }) => {
    config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
    });
    config.module.rules.push({
        test: /\.scss/,
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    esModule: true,
                    modules: {
                        localIdentName: '[local]_[hash:base64:5]',
                        namedExport: true
                    }
                }
            },
            {
                loader: 'sass-loader',
                options: {
                    sourceMap: mode === 'development'
                }
            }
        ]
    });
    config.plugins.push(
        new CopyPlugin({
            patterns: [
                { from: '../node_modules/@playkit-js/kaltura-player-js/dist/kaltura-ovp-player.js', to: './kaltura-player/kaltura-ovp-player.js' }
            ],
        })
    );
    config.externals = {
        ...config.externals,
        '@playkit-js/kaltura-player-js': 'root KalturaPlayer',
        preact: 'root KalturaPlayer.ui.preact'
    }
    return config;
};
