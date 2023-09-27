const players = [
    {
        playerName: "Ridwan",
        birthYear: 1950
    },
    {
        playerName: "Kimal",
        birthYear: 1990
    }
]

const prize = 1

const getRouletWinner = (players) => {
    return checkAgeWinner(players, gameLogic())
}

const gameLogic = () => {
    // Returns a random integer from 0 to 1:
    return Math.floor(Math.random() * 2)
}

const checkAgeWinner = (players, windIndex) => {
    const currentYear = new Date().getFullYear()
    const winPlayerAge = currentYear - players[windIndex].birthYear
    
    if (winPlayerAge > 50) {
        return console.log(`Selamat saudar/i ${players[windIndex].playerName}, Anda menang hadiah x100 sebesar ${prize * 100}`)
    } else {
        return console.log(`Selamat anda menang hadiah sebesar ${prize}`)
    }
}

getRouletWinner(players)