/* 
loader: 1. npm 下载  2. 使用配置loader rules
plugins: 1. npm 下载 2. 引入  3. 使用

*/

const { resolve } = require("path")

// 引入plugins
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
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
        // plugin配置
        // 使用html-webpack-plugin
        // 功能: 默认会创建一个html文件--引入打包输出的所有资源(JS/CSS)
        // 需求:需要有结构的html文件
        new HtmlWebpackPlugin({
            //赋值'.src/index.html' 文件,并自动引入打包输出所有资源(JS/CSS)
            template: "./src/index.html",
        }),
    ],
    mode: "development",
}
