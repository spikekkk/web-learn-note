/*
webpack.config.js webpack的配置文件
作用:指示webpack干哪些活(当运行webpack,会调用config进行打包编译)

所有构建工具都是基于node.js平台运行的   模块化默认使用common.js
*/
const { resolve } = require("path") // node 内置核心模块，用来处理路径问题。

module.exports = {
    // webpack配置
    // 入口起点
    entry: "./src/index.js",
    //输出
    output: {
        // 输出文件名
        filename: "built.js",
        // 输出路径
        // __dirname --> nodejs的变量,代表当前文件的目录据对路径-->去寻找build文件夹进行打包输出
        path: resolve(__dirname, "build"),
    },
    // loader的配置---
    module: {
        rules: [
            // 详细的loader配置
            // 不同的文件要配置不同的loader处理
            {
                // 匹配哪些文件(根据文件名进行匹配)
                test: /\.css$/,
                use: [
                    // use中方法执行顺序-->从下到上-->从右到左--->先出发css-loader
                    // 创建style标签,将js中的样式资源插入进行,添加到head中生效
                    "style-loader",
                    // 将CSS文件变成commonjs模块加载js中,里面内容是样式字符串
                    "css-loader",
                ],
            },
            // 处理less
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    // 优先执行less-loader-->将less文件编译成css文件给css-loader打包使用
                    "less-loader",
                ],
            },
        ],
    },
    plugins: [
        //详细的plugins的配置
    ],
    // 模式
    //生产模式 production  ---为啥不用生产模式?因为代码会被压缩就看不懂了
    mode: "development", // 开发模式
}
