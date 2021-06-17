const EventEmitter = require('events').EventEmitter
class Geektime extends EventEmitter {
    constructor() {
        super()
        setInterval(() => {
            this.emit('newlesson', { price: Math.random() * 100})
        }, 1000);
    }
}

const geektime = new Geektime

module.exports = geektime