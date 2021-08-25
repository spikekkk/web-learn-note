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
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            // 打包其他资源(除了html/js/css以外的资源)
            {
                // exclude 排除主要资源
                exclude: /\.(css|js|html)$/,
                loader: "file-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    mode: "development",
    //开发服务器devServer:用来自动化(自动化编译,自动打开浏览器,自动刷新浏览器等)
    // 特点:只会在内存中编译打包,不会有任何输出
    // 启动 devServer 指令: npx webpack-dev-server
    devServer: {
        //监听项目构建后的路径
        contentBase: resolve(__dirname, "build"),
        //启动gzip压缩(使得打包后的代码体积更小)
        compress: true,
        //端口号
        port: 3000,
        //自动打开浏览器
        open: true,
    },
}
