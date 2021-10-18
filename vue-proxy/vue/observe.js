import Observer from "./observer"
function observe(data) {
    if (typeof data !== "object" || data === null) return
    // 引入 观察者 返回构造函数
    return new Observer(data)
}

export default observe
