module.exports = function(playerAction) {
    const random = Math.random() * 10

    let computAction = ''
    if(random < 3) {
        computAction = 'rock'
    } else if (random < 6) {
        computAction = 'scissor'
    } else {
        computAction = 'paper'
    }
    console.log('我出了' + computAction)
    if (computAction === playerAction) {
        console.log('平局')
        return 0
    } else if (
        computAction === 'rock' && playerAction === 'scissor' ||
        computAction === 'scissor' && playerAction === 'paper' ||
        computAction === 'paper' && playerAction === 'rock'
    ) {
        console.log('你赢了')
        return -1
    } else  {
        console.log('你输了')
        return 1
    }
}