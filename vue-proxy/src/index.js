import Vue from "vue"
/*
从这来看,vue方法传入一个对象,根据其中的数据类型---->实际就是 options API
*/
let vm = new Vue({
    el: "#app",
    data() {
        return {
            title: "学生列表",
            classNum: 1,
            teacher: ["zhangsan", "lisi", "wanger"],
            total: 2,
            info: {
                a: {
                    b: 1,
                },
            },
            students: [
                {
                    id: 1,
                    name: "kk",
                    age: 12,
                },
                {
                    id: 2,
                    name: "小红",
                },
            ],
        }
    },
})

console.log(vm)
