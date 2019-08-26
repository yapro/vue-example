'use strict';

const path = require('path');
const moduleRules = require(__dirname + '/frontend/webpack/module.rules.js');
const extraParams = require(__dirname + '/frontend/webpack/extra.params.js');

module.exports = (env, options) => {
    console.log(path.basename(__filename) + ': Build starting in ' + options.mode + ' mode:');
    return [
        // SPA
        {
            entry: __dirname + '/frontend/App.js',
            output: {
                publicPath: '/build/',
                path: __dirname + '/public/build',
                filename: 'Shift.js',
                chunkFilename: '[id].[hash].Shift.js',
                library: 'Shift'
            },
            module: {
                rules: moduleRules
            },
            resolve: {
                modules: [
                    __dirname + '/frontend',
                    'node_modules'
                ],
                alias: {
                    'vue$': 'vue/dist/vue.esm.js'
                }
            },
            plugins: require(__dirname + '/frontend/webpack/plugins.js'),
            watchOptions: {
                ignored: /node_modules/
            },
            performance: extraParams.performance
        }
    ];
};
