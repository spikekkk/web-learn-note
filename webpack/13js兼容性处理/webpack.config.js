const { resolve } = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            // babel-loader--js的兼容 处理
            /*
            Js兼容处理: babel-loader @babel/core @babe/preset-env
            1. 基本JS兼容处理-->@babel/preset-env
            问题:只能转换基本的语法,promise等无法转换
            2.全部兼容性处理-->@babel/polyfill-->一次性将所有的兼容性代码引入--过于庞大
            3.需要做兼容性处理就做,按需加载--core.js
            */
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    //预设:指示babel做怎样的兼容性处理
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuilIns: "usage",
                                corejs: {
                                    version: 3,
                                },
                                // 指定兼容性那个版本的浏览器
                                targets: {
                                    chormo: "60",
                                    firfox: "60",
                                    ie: "9",
                                },
                            },
                        ],
                    ],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    mode: "development",
}
