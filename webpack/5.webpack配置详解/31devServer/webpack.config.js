const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/,
                // 多个loader用use
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    plugins: [new HtmlWebpackPlugin()],

    mode: "development",
    // 解析模块的规则
    resolve: {
        // 配置解析模块路径别名: 优先简写路劲,缺点没有路径提示
        alias: {
            $css: resolve(__dirname, "src/css"),
        },
        // 配置路径的后缀名-可以省略文件后缀名书写
        // 以往引入-->import "$css/index.css"
        // 配置后引入-->import "$css/index"
        extensions: [".js", ".json", ".jsx", ".css"],
        // 告诉webpack解析模块是去哪里找到相关npm包构建--->找那个目录(不写这个的话,会一层层往上面找,现在就是/30resolve/5.webpack配置详解)
        modules: [resolve(__dirname, "../../node_modules"), "node_modules"],
    },
    devServer: {
        //运行代码目录
        contentBase: resolve(__dirname, "build"),
        // 监视 contentBase目录下的所有文件,一旦文件变化就会 reload
        watchContentBase: true,
        // 忽略文件
        watchOptions: {
            // 忽略文件
            ignored: /node_modules/,
        },
        // 启动gzip压缩，体积小
        compress: true,
        // 端口号 5000
        port: 5000,
        // 自动打开浏览器
        open: true,
        // 开启HMR功能
        hot: true,
        // 不要现实启动服务器日志信息
        clientLogLevel: "none",
        // 除了一些基本启动信息以外，其他内容都不要显示
        quiet: true,
        // 如果出错了不要全屏提事
        overlay: false,
        // 服务器代理--->解决开发环境跨域问题
        proxy: {
            // 一旦devServer(5000)服务器接受到/api/xxx的请求,就会把请求转发到另外一台服务器
            "/api": {
                target: "http://loacalhost:3000",
                // 发送请求时,请求路径重写: 将/api/xxx--->/xxx  (去掉/api)
                pathRewrite: {
                    "^/api": "",
                },
            },
        },
    },
}
