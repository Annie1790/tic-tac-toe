import ui from "./ui.js";

class Player {
    constructor(playerName) {
        this.playerName = playerName;
    }

    get returnName() {
        return this.playerName;
    }
    
}