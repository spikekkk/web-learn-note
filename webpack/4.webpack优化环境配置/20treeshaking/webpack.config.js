const { resolve } = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

/**
 * 缓存:babel缓存
 *options:{cacheDirectory: true,}
 *文件资源缓存
 hash:每次webpack构建时候会生成一个唯一的hash值
 问题: 因为js和css使用同一个hash值,如果hash值修改,会导致所有文件的缓存值失效
 chunkhash:据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样
  综上所述：开启缓存需要经历两个步骤：
      1. 设置cacheDirectory: true
      2. 在输出的数组中加上contenthash
 */

process.env.NODE_ENV = "production"

// 复用loader
const commonCssLoader = [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
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
        filename: "js/built[contenthash:10].js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                // 优先执行
                enforce: "pre",
                loader: "eslint-loader",
                options: {
                    fix: true,
                },
            },
            {
                /*
     以下loader只会匹配一个（这样子便不会只需要一个loader的时候将所有的loader遍历一遍了，可以提高速度）
      注意：不能有两个配置处理同一种类型文件
      比如我们的bable-loader和eslint-loader都要使用，那么我们将eslint-loader提取出来放到oneOf前面，
      这样前面的eslint-loader执行完毕之后再从oneOf里面找到bable-loader执行
        */
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [...commonCssLoader],
                    },
                    {
                        test: /\.less$/,
                        use: [...commonCssLoader, "less-loader"],
                    },
                    /*
            正常来讲，一个文件只能被一个loader处理。
            当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：
              先执行eslint 在执行babel
          */
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
                                        corejs: {
                                            version: 3,
                                        },
                                        targets: {
                                            chrome: "60",
                                            firefox: "50",
                                        },
                                    },
                                ],
                            ],
                            cacheDirectory: true,
                        },
                    },
                    {
                        test: /\.(jpg|png|gif)/,
                        loader: "url-loader",
                        options: {
                            limit: 8 * 1024,
                            name: "[hash:10].[ext]",
                            outputPath: "imgs",
                            esModule: false,
                        },
                    },
                    {
                        test: /\.html$/,
                        loader: "html-loader",
                    },
                    {
                        exclude: /\.(js|css|less|html|jpg|png|gif)/,
                        loader: "file-loader",
                        options: {
                            outputPath: "media",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/built[contenthash:10].css",
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            minify: {
                collapseWhitespace: true,
                removeComments: true,
            },
        }),
    ],
    mode: "production",
    devtool: "source-map",
}
