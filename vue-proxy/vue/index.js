/*
vue2.0 在vue原型上添加方法--prototype
*/

import { initState } from "./init"
function Vue(options) {
    this._init(options)
}

Vue.prototype._init = function (options) {
    let vm = this
    vm.$options = options
    initState(vm)
}
export default Vue
