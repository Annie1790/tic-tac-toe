import { Player } from "./player.js";
import { GameBoard } from "./game_board.js";
import { Cell } from "./cell.js";

export class Game {
    constructor() {
        this.gameBoard = new GameBoard(this);
        this.player1 = new Player("player 1", "X");
        this.player2 = new Player("player 2", "O");
        this.activePlayer = this.player1;
        this.gameOver = false;
    }

    onRoundComplete(isGameEnded) {
        if (isGameEnded === false) {
            if (this.activePlayer === this.player1) {
                this.activePlayer = this.player2;
            } else if (this.activePlayer === this.player2) {
                this.activePlayer = this.player1;
            }
        } else {
            setTimeout(() => {
                alert(`${this.activePlayer.name} won!`)
            }, 500)
            this.gameOver = true;
        }
        console.log(this)
    }
    get activePlayerSymbol() {
        return this.activePlayer.symbol
    }
}