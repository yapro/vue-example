'use strict';

module.exports = [
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            postcss: [require('postcss-cssnext')()],
            options: {
                extractCSS: true
            },
            loaders: {
                js: 'babel-loader',
                options: {
                    "presets": ['es2015', 'stage-2'],
                    "compact": true
                },
            }
        }
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
            /node_modules/.test(file) &&
            !/\.vue\.js/.test(file)
        ),
        options: {
            "presets": ['es2015', 'stage-2'],
            "compact": true
        }
    },
    {
        test: /\.css$/,
        use: [
            {
                loader: 'vue-style-loader'
            },
            {
                loader: 'css-loader',
            }
        ]
    },
    {
        test: /\.scss$/,
        use: [
            {
                loader: 'vue-style-loader'
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader" // compiles Sass to CSS
            }
        ]
    },
    {
        test: /\.worker\.js$/,
        use: {
            loader: 'worker-loader',
            options: {
                publicPath: '/Resource/App/'
            }
        },
    }
];
