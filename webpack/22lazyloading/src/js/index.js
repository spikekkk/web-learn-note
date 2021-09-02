console.log("index-js")

// eslint-disable-next-line
// 懒加载--点击按钮才调用此方法
document.getElementById("btn").onclick = function () {
    import(/* webpackChunkName: 'test'*/ "./test").then(({ muil }) => {
        console.log("lazyloader", muil(2, 4))
    })
}
