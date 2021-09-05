const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__dirname, "build"),
        /*命名打包出去的文件名称*/
        chunkFilename: "js/[name].[contenthash:10]_chunk.js",
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

    mode: "production",
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
    optimization: {
        splitChunks: {
            chunks: "all",
            /* 
            以下皆为默认值--直接如上all既可以
            minSize: 30 * 1024, //分割的chunk最小为30KB
            maxSize: 0, // 最大没有限制
            minChunks: 1, // 要提取的chunks最少被引用1次
            maxAsyncRequests: 5, //按需加载时--并行加载的最大文件数
            maxInitialRequests: 3, //入口js文件最大并行请求数量
            automaticNameDelimiter: "~", // 名称连接符
            name: true, // 可以使用命名规则
            cacheGroups: {
                // 分割chunk的组
                // node_modules文件会被打包到 vendors 组的chunk中。--> vendors~xxx.js
                // 满足上面写的公共规则，如：大小超过30kb，至少被引用一次。
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // 优先级
                    priority: -10,
                },
                default: {
                    // 要提取的chunk最少被引用2次
                    minChunks: 2,
                    // 优先级
                    priority: -20,
                    // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包模块
                    reuseExistingChunk: true,
                },
            },
            */
        },
        // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
        // 解决：修改a文件导致b文件的contenthash变化
        runtimeChunk: {
            name: (entrypoint) => `runtime-${entrypoint.name}`,
        },
        minimizer: [
            // 配置生产环境的压缩方案：js和css
            new TerserWebpackPlugin({
                // 开启缓存
                cache: true,
                // 开启多进程打包
                parallel: true,
                // 启动source-map
                sourceMap: true,
            }),
        ],
    },
}
