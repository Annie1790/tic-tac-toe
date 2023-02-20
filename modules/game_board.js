import ui from "./ui.js";
import { Player } from "./player.js";

//delegate pattern

class Game {
    constructor() {
        this.gameBoard = new GameBoard(this);
        this.player1 = new Player("player 1", "X");
        this.player2 = new Player("player 2", "O");
        this.activePlayer = this.player1;
    }

    onRoundComplete(isGameEnded) {
        if (isGameEnded === false) {
            if (this.activePlayer === this.player1) {
                this.activePlayer = this.player2;
            } else if (this.activePlayer === this.player2) {
                this.activePlayer = this.player1;
            }
        } else {
            alert(`${this.activePlayer.player} won!`)
        }
        console.log(this)
    }
}

class GameBoard {
    constructor(game) {
        this.cells = [];

        for (let i = 0; i < 9; i++) {
            this.cells.push(new Cell(i, this, game))
        }
        this.game = game;
    }

    onCellTicked() {
        //to do: 
        //check if current user won
        let isGameEnded = false;
        console.log(this)
        this.game.onRoundComplete(isGameEnded);
    }
}

class Cell {
    constructor(index, gameBoard, game) {
        this.element = ui.cells[index];
        this.index = index;
        this.element.addEventListener("click", () => {
            this.onClicked()
        }, { once: true })
        this.gameBoard = gameBoard;
        this.game = game;
    }

    onClicked() {
        //to do: 
        //draw x or O based on the active player
        this.element.innerHTML = this.game.activePlayer.symbol;
        console.log(this)
        this.gameBoard.onCellTicked();
    }
}


let game = new Game();

