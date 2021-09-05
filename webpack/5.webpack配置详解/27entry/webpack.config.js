const { resolve } = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    //   entry:入口起点
    //   1.string-->'.src/index.js'(用的多)
    //  单入口
    //  打包形成一个chunk.输出一个bundle文件.
    //   此时chunk的名称默认时main
    //  2.array-->['src/add.js','src/index.js'] (一般不使用此种形势)
    //  多入口
    //  所有文件最终形成一个chunk,输出出去只有一个bundle文件.
    //  -->只有再HMR功能中仍html热更新生效
    //  3.object入口(用的最多)
    //  多入口
    //  有几个入口文件就形成几个chunk,输出多个bundle文件.
    //  此时chunk的名称是key
    //   {
    //     index: "./src/index.js",
    //     add: "./src/add.js",
    // },
    //  --> 特殊用法
    //     {
    // 所有入口文件最终只会形成一个chunk, 输出出去只有一个bundle文件。
    //       index: ['./src/index.js', './src/count.js'],
    // 形成一个chunk，输出一个bundle文件。
    //       add: './src/add.js'
    //     }

    entry: {
        index: "./src/index.js",
        add: "./src/add.js",
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "build"),
    },
    plugins: [new HtmlWebpackPlugin()],
    mode: "development",
}
