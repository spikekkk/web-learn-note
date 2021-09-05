const { resolve } = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin") // 提取css为单一文件
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// 定义nodejs环境变量
process.env.NODE_ENV = "pruduction"
const commonCSS = [
    MiniCssExtractPlugin.loader, // 这样会把css单独成唯一文件,而不是统一放入html的style中
    "css-loader",
    {
        // 对css做兼容性处理,需要在pagejson中定义browserslist需要兼容哪些浏览器
        loader: "postcss-loader",
        options: {
            ident: "postcss",
            plugins: () => [require("postcss-preset-env")()],
        },
    },
]
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/biult.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [...commonCSS],
            },
            {
                test: /\.less$/,
                use: [...commonCSS, "less-loader"],
            },
            // 在package.json中配置eslintConfig--->aribnb的规范
            /**
             * 正常来说:一个文件只能被一个loader处理,
             * 当一个文件被多个loader处理
             * 一定要指定loader的执行顺序
             * 下面就是 --先执行eslint--在执行babel
             * 使用enforce 指定执行的优先级顺序---最优先-->其他loader要等待他执行完毕
             */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                enforce: "pre",
                options: {
                    fix: true, //添加自动修复规范
                },
            },
            // js兼容性处理
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "usage",
                                corejs: { version: 3 }, // 指定兼容性那个版本的浏览器
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
            // 处理图片
            {
                test: /\.(jpg|png|git)/,
                loader: "url-loader", //使用的esmodule引入规则;需要关闭此规则使用
                options: {
                    limit: 8 * 1024,
                    name: "[hase:10].[ext]",
                    outputPath: "imgs",
                    esMoudle: false,
                },
            },
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            // 处理其他文件
            {
                exclude: /\.(js|css|less|html|jpg|png|git)/,
                loader: "file-loader",
                outputPath: "media",
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/built.css",
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html", //指定html为模板创建新的html文件
            minify: {
                collapseWhitespace: true, // 压缩空格
                removeComments: true, //去除注释
            },
        }),
    ],
    mode: "production",
}
