export default class PokerBoard {
    constructor(button, players, nextToAct) {
        this.button = button;
        this.players = players;
        this.nextToAct = nextToAct;
    }
    buildPokerTable() {
        let pokerTable = document.createElement("section");
        pokerTable.setAttribute("class", "poker-table");
        document.getElementById("app").append(pokerTable);
    }
}