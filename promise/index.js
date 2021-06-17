// (function() {
//     var promise = new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             reject(new Error('3'))
//         }, 300);
//     }).then(function(res) {
//         // console.log(res)
//     }).catch(function(err) {
//         console.log(err)
//     })
//     console.log(promise)
//     setTimeout(() => {
//         console.log(promise)
//     }, 800);
// })();

function interview(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.1) {
                callback(null, 'success')
            } else {
                // throw new error('fail')
                callback(new Error('fail'))
            }
        }, 500);
    })
}