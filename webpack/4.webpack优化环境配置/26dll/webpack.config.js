/* 
loader: 1. npm 下载  2. 使用配置loader rules
plugins: 1. npm 下载 2. 引入  3. 使用

*/

const { resolve } = require("path")
const webpack = require("webpack")
// 引入plugins
const HtmlWebpackPlugin = require("html-webpack-plugin")
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")
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
        // plugin配置
        // 使用html-webpack-plugin
        // 功能: 默认会创建一个html文件--引入打包输出的所有资源(JS/CSS)
        // 需求:需要有结构的html文件
        new HtmlWebpackPlugin({
            //赋值'.src/index.html' 文件,并自动引入打包输出所有资源(JS/CSS)
            template: "./src/index.html",
        }),
        // 告诉webpack哪些库不需要打包,同时调用这些库路径使用时的名称也要修改
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, "dll/manifest.json"),
        }),
        //将不需要打包的文件---某个文件打包输出,并在html中自动引入该资源
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, "dll/jquery.js"),
        }),
    ],
    mode: "production",
}
/*
  首先要在webpack.dll.js与webpack.config.js中引入webpack插件
  1. 在webpack.dll.js文件中的写入我们需要打包的库以及打包的库输出的名字为什么（实现功能：第一次打包之后只要jquery库名称不变，下一次不需要在重新打包了，直接使用，提高构建速度）(不仅仅是jquery库，各种库都要引入)
  2. plugin中生成的manifest.json文件表示了jquery的映射关系
  3. webpack.config.js中使用DllReferencePlugin告诉webpack哪些文件不需要再重新打包
  4. webpack.config.js中使用AddAssetHtmlWebpackPlugin将ebpack.dll.js中打包的资源在html中自动引入
*/
