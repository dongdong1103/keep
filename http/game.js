module.exports = function(playerAction) {
    if (['rock', 'scissor', 'paper'].indexOf(playerAction) === -1) {
        throw new Error('invalid playerAction');
    }

    // 计算电脑出的东西
    let computAction = ''
    const random = Math.random() * 3
    if(random < 1) {
        computAction = 'rock'
    } else if (random > 2) {
        computAction = 'scissor'
    } else {
        computAction = 'paper'
    }
    if (computAction === playerAction) {
        return 0
    } else if (
        computAction === 'rock' && playerAction === 'scissor' ||
        computAction === 'scissor' && playerAction === 'paper' ||
        computAction === 'paper' && playerAction === 'rock'
    ) {
        return -1
    } else  {
        return 1
    }
}