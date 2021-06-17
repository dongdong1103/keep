const glob = require('glob')
// var result = null
// console.time('glob')
// result = glob.sync(__dirname + '/**/*')
// console.log(result)
// console.timeEnd('glob')

var result = null
console.time('glob')
result = glob(__dirname, '/**/*', function(err,res) {
    result = res
    console.log('got result')
})
console.timeEnd('glob')
console.log(1+1)