const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")

// 设置nodejs的环境变量
process.env.NODE_ENV = "development"
//npm install --save-dev optimize-css-assets-webpack-plugin 压缩插件
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 创建style标签,将样式放入

                    //"style-loader",
                    // 使用minicssextractplugin取代style-loader
                    // 作用:提取js中的css成为耽误文件
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                // 加载postcss的插件
                                require("postcss-preset-env")(),
                            ],
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            // 对应输出的css文件进行重命名--新增一个文件夹目录存放
            filename: "css/built.css",
        }),
        // 压缩css配置
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    mode: "development",
}
