const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

// 设置nodejs的环境变量
process.env.NODE_ENV = "development"
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

                    /*
                   css兼容处理:postcss-->postcss-loader postcss-preset-env

                   帮postcss找到package.json中的browseLise的配置
                   通过配置帮助postcss加载指定的css兼容性配置
                    "browserslist":{
                        "development":[
                        "last 1 chrome version",
                        "last 1 firefox version"
                        ],

                        默认是看生产环境的配置
                        "production":[
                        ">0.2%", // 大于0.2%的浏览器
                        "not dead",  // 所有的鸥鹏
                      
                        "not op_mini all" 
                        ]
                    }

                   */
                    // 使用loader的默认配置
                    // 'postcss-loader'
                    // 修改loader的配置
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
    ],
    mode: "development",
}
