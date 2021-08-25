const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            // loader配置
            {
                // 处理css资源
                test: /\.less$/,
                // 要使用多个loader,使用数组形式--从右往左调用
                use: ["style-loader", "css-loader", "less-loader"],
            },
            {
                //问题:处理不了html中的img图片
                // 打包图片资源
                test: /\.(jpg|png|gif)$/,
                // 仅使用一个资源时候 -->使用一个loader
                // 下载使用两个包--url-loader file-loader
                loader: "url-loader",
                options: {
                    //当图片大小小于8Kb,就会被转为base64处理--根据你图片最小格式处理  8 9 10 *1024都可以
                    // 优点:减少请求数量,减轻服务器压力
                    // 缺点: 图片体积变大(base64的体积更大,文件请求速度慢一点)
                    limit: 8 * 1024,
                    // 问题:url-loader使用ES6模块化解析,而html-loder引入图片是commonjs
                    // 解析时候出现问题: [object Module]
                    // 解决:关闭url-loader的es6模块解析,使用commonjs解析
                    esModule: false,
                    name: "[hash:10].[ext]",
                },
            },
            {
                test: /\.html$/,
                // 处理html文件中的img图片(负责引入img,从而能被url-loder进行处理)
                loader: "html-loader",
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
