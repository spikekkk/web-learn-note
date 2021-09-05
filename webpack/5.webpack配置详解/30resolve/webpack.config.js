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
}
