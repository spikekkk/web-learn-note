import proxyData from "./proxy"
function initState(vm) {
    console.log(vm)
    const options = vm.$options
    if (options.data) {
        initData(vm)
    }
}
function initData(vm) {
    let data = vm.$options.data
    /*
    在vm实际挂载的时候,希望导入的是一个 临时的data
    */
    data = vm._data = typeof data === "function" ? data.call(vm) : data || {}

    /*遍历所有key,代理返回要取得值*/
    for (let key in data) {
        proxyData(vm, "_data", key)
    }
}

export { initState }
