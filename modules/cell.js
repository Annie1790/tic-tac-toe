import ui from "./ui.js";

export class Cell {
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
        if (this.game.gameOver === false) {
            this.content = this.game.activePlayerSymbol;
            this.gameBoard.onCellTicked();
        }
    }

    get content() {
        return this.element.innerHTML
    }

    set content(text) {
        this.element.innerHTML = text;
    }
}