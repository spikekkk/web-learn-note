import "$css/index.css"
import("./add").then(({ add }) => {
    console.log("add", add(1, 2))
})
