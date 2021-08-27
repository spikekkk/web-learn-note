import "@babel/polyfill"
const add = (x, y) => {
    return x + y
}

console.log("add", add(2, 4))

const promise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("定时机器执行结束")
        resolve()
    }, 100)
})

console.log("promise", promise)
