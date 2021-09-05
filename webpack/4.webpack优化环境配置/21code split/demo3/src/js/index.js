function sum(...args) {
    return args.reduce((p, c) => p + c, 0)
}

import(/* webpackChunkName: 'test' */ "./test")
    .then(({ muil, count }) => {
        // 文件加载成功~
        // eslint-disable-next-line
        console.log(muil(2, 5))
    })
    .catch(() => {
        // eslint-disable-next-line
        console.log("文件加载失败~")
    })

// eslint-disable-next-line
console.log(sum(2, 3, 4, 5, 6))
console.log("muil", muil(3, 6))
