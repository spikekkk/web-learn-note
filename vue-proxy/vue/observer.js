import defineReactiveData from "./reactive"
// { } defineProperty
// [ ] 自己写方法观察
import { arrMethods } from "./array"
import observeArr from "./observeArr"
function Observer(data) {
    if (Array.isArray(data)) {
        /*如果数据是数组的话,本身要去拦截数组的七个方法,这七个方法都会更改原数组
        Object.defineProperty 本身是针对对象的,而非数组
        更改原数组的方法是不希望使用原型上的方法去更改的
        而像push,slice等是会给数组新增一项,而这一项我们需要重新监听是否是数组or对象;
        如果采用原型自带的方法是没有办法做到每一项的新增都去监听一次的
        */
        data.__proto__ = arrMethods
        observeArr(data)
    } else {
        this.walk(data)
    }
}

Observer.prototype.walk = function (data) {
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i],
            value = data[key]
        defineReactiveData(data, key, value)
    }
}

export default Observer
