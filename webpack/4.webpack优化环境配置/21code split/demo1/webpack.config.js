const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**

 */

process.env.NODE_ENV = "production"

module.exports = {
    /**
     * 单入口文件
     */
    // entry: "./src/js/index.js",
    entry: {
        // 多入口:有一个入口,最终输出就有一个bundle---适用于多页面应用程序多入口
        index: "./src/js/index.js",
        test: "./src/js/test.js",
    },
    output: {
        // 取输出文件名方便区分--比如上面的entry中名称为index,那么输出的文件名首部会有index名称
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__dirname, "build"),
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],
    mode: "production",
}
