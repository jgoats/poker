export default function (button, moveNextPlayer) {
    if (moveNextPlayer) {
        if (button.result == 1) {
            let outerCircle1 = document.getElementById("player-1-outerCircle");
            let innerCircle1 = document.getElementById("player-1-innerCircle");
            outerCircle1.classList.add("outerCircle");
            innerCircle1.classList.add("innerCircle");

            let outerCircle2 = document.getElementById("player-2-outerCircle");
            let innerCircle2 = document.getElementById("player-2-innerCircle");
            outerCircle2.classList.remove("outerCircle");
            innerCircle2.classList.remove("innerCircle");
        }
    }
    else if (button.result == 1) {
        let outerCircle1 = document.getElementById("player-1-outerCircle");
        let innerCircle1 = document.getElementById("player-1-innerCircle");
        outerCircle1.classList.remove("outerCircle");
        innerCircle1.classList.remove("innerCircle");

        let outerCircle2 = document.getElementById("player-2-outerCircle");
        let innerCircle2 = document.getElementById("player-2-innerCircle");
        outerCircle2.classList.add("outerCircle");
        innerCircle2.classList.add("innerCircle");
    }
    else {
        let outerCircle1 = document.getElementById("player-1-outerCircle");
        let innerCircle1 = document.getElementById("player-1-innerCircle");
        outerCircle1.classList.add("outerCircle");
        innerCircle1.classList.add("innerCircle");

        let outerCircle2 = document.getElementById("player-2-outerCircle");
        let innerCircle2 = document.getElementById("player-2-innerCircle");
        outerCircle2.classList.remove("outerCircle");
        innerCircle2.classList.remove("innerCircle");
    }
}