import ui from "./ui.js";
import { Game } from "./game.js";
import { Cell } from "./cell.js";
//delegate pattern

export class GameBoard {
    constructor(game) {
        this.cells = [];

        for (let i = 0; i < 9; i++) {
            this.cells.push(new Cell(i, this, game))
        }
        this.game = game;
    }

    onCellTicked() {
        let isGameEnded = this.checkWinningGame();
        console.log(this,isGameEnded)
        this.game.onRoundComplete(isGameEnded);
    }

    checkWinningGame() {
        const winningIndexes = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [2, 4, 6],
            [0, 4, 8]
        ]

        let result = winningIndexes.some((conditions) => {
            return conditions.every((index) => {
                return this.cells[index].content === this.game.activePlayerSymbol;
            })
        })
        return result;
    }
}

let game = new Game();

