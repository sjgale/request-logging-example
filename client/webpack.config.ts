const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './index'),
    devtool: 'inline-source-map',
    watch: true,
    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
            // {
            //     test: /\.scss|\.css$/,
            //     use: ['style-loader', 'css-loader', 'sass-loader'],
            // },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [
            //         'file-loader'
            //     ]
            // }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: path.resolve(__dirname, '../', 'dist/client'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            templateParameters:{
                entry:'client/index.html'
            }
        })
    ]
}