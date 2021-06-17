const playerAction = process.argv[process.argv.length - 1]

const random = Math.random() * 10

let computAction = ''
if(random < 3) {
    computAction = 'rock'
} else if (random < 6) {
    computAction = 'scissor'
} else {
    computAction = 'paper'
}
console.log(computAction)
if (computAction === playerAction) {
    console.log('平局')
} else if (
    computAction === 'rock' && playerAction === 'scissor' ||
    computAction === 'scissor' && playerAction === 'paper' ||
    computAction === 'paper' && playerAction === 'rock'
) {
    console.log('你赢了')
} else  {
    console.log('你输了')
}