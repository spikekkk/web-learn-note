/**
 * 服务器代码
 * 启动服务器指令: npm i nodemon -g
 * nodemon server.js
 * 或者使用
 * node server.js
 */

const exprss = require("express")
const app = exprss()
app.use(exprss.static("build", { maxAge: 1000 * 3600 }))
app.listen(3000)
