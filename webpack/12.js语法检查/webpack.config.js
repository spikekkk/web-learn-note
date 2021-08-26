const { resolve } = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, "build"),
    },
    module: {
        rules: [
            /**
             * 语法检查: eslint-loader eslint
             * 只检查用户写的源代码,不检查第三方的代码
             * 设置检查规则：
              package.json 中 eslintConfig 中设置~
              "eslintConfig": {
              "extends": "airbnb-base"
              }
              airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint
             */
            {
                test: /\.js$/,
                exclude: /node_modules/, // 排除node_modules
                loader: "eslint-loader",
                options: {
                    // 自动修复
                    fix: true,
                },
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
