console.log('mic check 1, 2, 1, 2');

function coinToss() {
    return Math.random() > 0.5 ? 'heads' : 'tails'
}

function fiveHeadsPromise() {
        return new Promise((resolve, reject) => {
            let headsUp = 0;
            let flips = 0;
            let maxFlips = 100;

            while (headsUp < 5 && flips <= maxFlips) {
                flips++;
                let total = coinToss();
                console.log(`${total} was flipped`);
                if (total === 'heads') {
                    headsUp++;
                } else {
                    headsUp = 0;
                }
            }
            if (flips <= maxFlips) {
                resolve(`It took ${flips} tries to flip five 'heads'`);
            } else {
                reject(`Attempts have exceeded ${maxFlips} flips.`);
            }
        });
    }
    fiveHeadsPromise()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );
    console.log( 'When does this run now?' );
    
document.write('Coin Flipping Assignment - rewriting with Promises');