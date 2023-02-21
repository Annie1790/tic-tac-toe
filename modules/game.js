import { Player, AiPlayer } from "./player.js";
import { GameBoard } from "./game_board.js";

export class Game {
    constructor() {
        this.gameBoard = new GameBoard(this);
        this.player1 = new Player("player 1", "X");
        this.player2 = new AiPlayer("O", this.gameBoard);
        this.activePlayer = this.player1;
        this.gameOver = false;
        this.counter = 0;
    }

    onRoundComplete(isGameEnded) {
        this.counter++;
        if (this.counter !== 9) {
            if (isGameEnded === false) {
                if (this.activePlayer === this.player1) {
                    this.activePlayer = this.player2;
                    this.activePlayer.play();
                } else if (this.activePlayer === this.player2) {
                    this.activePlayer = this.player1;
                    this.activePlayer.play();
                }
            } else {
                setTimeout(() => {
                    alert(`${this.activePlayer.name} won!`)
                }, 500)
                this.gameOver = true;
            }
        } else {
            setTimeout(() => {
                alert(`Tie!`)
            }, 500)
            this.gameOver = true;
        }
        console.log(this)
    }
    get activePlayerSymbol() {
        return this.activePlayer.symbol
    }
}
let game = new Game();