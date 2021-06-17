const geektime = require("./lib")
geektime.addListener('newlesson', (res) => {
    if (res.price <60) {

    console.log('bug!', res.price)
    }
})