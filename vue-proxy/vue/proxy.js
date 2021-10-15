function proxyData(vm, target, key) {
    Object.defineProperty(vm, key, {
        get() {
            console.log("proxydata", vm[target][key])
            return vm[target][key]
        },
        set(newValue) {
            vm[target][key] = newValue
        },
    })
}

export default proxyData
