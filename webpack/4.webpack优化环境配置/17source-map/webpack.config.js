/*
HMR优化
HMR: hot module replacement 热模块替换 / 模块热替换
作用:一个模块发生变化,只会重新打包编译这一个模块
 样式文件：可以使用HMR功能：因为style-loader内部实现了~
 js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
        注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。

*/

const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: ["./src/js/index.js", "./src/index.html"],
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            // loader 配置
            {
                // 处理less资源
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                // 处理css资源
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                // 处理图片资源--为css中引入的资源
                test: /\.(jpg|png|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 8 * 1024,
                    name: "[hash:10].[ext]",
                    // 关闭es6模块化
                    esModule: false,
                    outputPath: "imgs",
                },
            },
            {
                // 处理html中的img标签图片资源
                test: /\.html$/,
                loader: "html-loader",
            },
            {
                // 处理其他资源
                exclude: /\.(html|js|css|less|jpg|png|gif)/,
                loader: "file-loader",
                options: {
                    name: "[hash:10].[ext]",
                    outputPath: "media",
                },
            },
        ],
    },
    // plugin配置
    plugins: [
        // plugins的配置
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    mode: "development",
    devServer: {
        contentBase: resolve(__dirname, "build"),
        compress: true,
        port: 3000,
        open: true,
        // 开启hmr功能--每次修改webpack配置要重启webpack服务
        hot: true,
    },
    devtool: "source-map",
}

/**
 * source-map:一种 提供源代码到构建后代码映射 技术 （如果构建后代码出错了，通过映射可以追踪源代码错误）
 *  source-map：外部
      错误代码准确信息 和 源代码的错误位置
    inline-source-map：内联
      只生成一个内联source-map
      错误代码准确信息 和 源代码的错误位置
    hidden-source-map：外部
      错误代码错误原因，但是没有错误位置
      不能追踪源代码错误，只能提示到构建后代码的错误位置
    eval-source-map：内联
      每一个文件都生成对应的source-map，都在eval
      错误代码准确信息 和 源代码的错误位置
    nosources-source-map：外部
      错误代码准确信息, 但是没有任何源代码信息
    cheap-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      只能精确的行
    cheap-module-source-map：外部
      错误代码准确信息 和 源代码的错误位置 
      module会将loader的source map加入


 */
