/* 
loader: 1. npm 下载  2. 使用配置loader rules
plugins: 1. npm 下载 2. 引入  3. 使用

*/

const { resolve } = require("path")

// 引入plugins
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build"),
    },

    module: {
        rules: [
            //loader配置
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    mode: "production",
    externals: {
        //
        jquery: "jQuery",
    },
}
