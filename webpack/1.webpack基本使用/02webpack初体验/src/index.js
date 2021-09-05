/* index.js webpack 入口起点文件

1. 运行指令:
  开发环境: webpack ./src/index.js -o ./build/build.js --mode=development
  webpack 会以./src/index.js 为入口文件开始打包,打包后输出到 ./build/build.js
  真题打包环境是-->开发环境
  生产环境: webpack ./src/index.js -o ./build/build.js --mode=production
  webpack 会以./src/index.js 为入口文件开始打包,打包后输出到 ./build/build.js
  真题打包环境是-->生产环境
1.1 webpack 5执行：webpack --entry ./src/index.js -o ./build/built.js --mode=development

2. 结论
  1.  webpack能处理js/json资源,不能处理css/img等其他资源
  2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化
  3. 生产环境比开发环境多了一个压缩JS代码
*/

function add(x, y) {
    return x + y
}
console.log("x", add(2, 43))
