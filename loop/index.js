const eventloop = {
    queue: [],
    loop() {
        console.log(7777)
        while (this.queue.length ) {
            var callback = this.queue.shift();
            callback()
        }
        console.log(8888)
        setTimeout(() => {
            console.log(999)
            this.loop.bind(this)
        }, 50);
    },
    add(callback) {
         this.queue.push(callback)
    }
}

eventloop.loop()

 setTimeout(() => {
     eventloop.add(function() {
         console.log(1)
     })
 }, 500);

 setTimeout(() => {
     eventloop.add(function() {
         console.log(2)
     })
 }, 800);