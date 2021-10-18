/*
1.保存我们的方法 哪些回更改原数组

*/

import { ARR_METHODS } from "./config"
import observeArr from "./observeArr"
/*
Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
*/
const originArrMethods = Array.prototype,
    //创建新的对象--> 获取原生数组的所有方法
    arrMethods = Object.create(originArrMethods)
ARR_METHODS.map(function (m) {
    arrMethods[m] = function () {
        let args = Array.prototype.slice.call(arguments), // 获取原数组参数
            rt = originArrMethods[m].apply(this, args)
        let newArr
        switch (m) {
            case "push":
            case "unshift":
                newArr = args
                break
            case "splice":
                newArr = args.slice(2)
                break
            default:
                break
        }
        newArr && observeArr(newArr)
        return rt
    }
})

export { arrMethods }
