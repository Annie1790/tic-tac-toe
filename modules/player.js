export class Player {
    constructor(name, symbol) {
      this.name = name;
      this.symbol = symbol;
    }

    play() {
        console.log(`Waiting for ${this.name}`)
    }
}

export class AiPlayer extends Player {
    constructor(symbol, gameBoard) {
        super("Ai Player", symbol);
        this.gameBoard = gameBoard;
    }
    play() {
        const result = this.gameBoard.emptyCells;
        const randomCell = Math.floor(Math.random(result.length) *result.length)
        let cell = result[randomCell];
        setTimeout(() => {
            cell.onClicked()
        },500)
    }
}

