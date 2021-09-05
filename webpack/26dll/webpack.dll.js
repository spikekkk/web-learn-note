/**
 * 使用dll技术对某些库(第三方库:jquery,react,vue...)进行单独打包
 * 当运行webpack命令时,默认查找webpack.config.js配置文件
 * 现在需要运行webpack.dll.js
 * 指定命令运行--> webpack --config webpack.dll.js
 */
const { resolve } = require("path")
const webpack = require("webpack")

module.exports = {
    entry: {
        // 最终打包生成的[name]--->jquery
        // ['jquery']--->要打包的库是jquery
        jquery: ["jquery"],
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "dll"),
        library: "[name]_[hash:10]", // 打包的库向外暴露出的内容叫什么名字
    },
    plugins: [
        // 打包生成一个 manifest.json --> 提供和jquery映射
        new webpack.DllPlugin({
            name: "[name]_[hash]" /*映射库的暴露的内容名称*/,
            path: resolve(__dirname, "dll/manifest.json"), // 输出的文件路径
        }),
    ],
    mode: "production",
}
