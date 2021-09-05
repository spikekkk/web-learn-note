import "../css/index.less"
// 引入 iconfont 样式文件
import "../css/iconfont.css"

console.log("index.js文件被重新加载~")
function add(x, y) {
    return x + y
}
console.log("add", add(2, 4))
if (module.hot) {
    // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
    module.hot.accept("./print.js", function () {
        // 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
        // 会执行后面的回调函数
        //此处相当于是监听到print.js发生了变化，执行print()函数
        print()
    })
}
