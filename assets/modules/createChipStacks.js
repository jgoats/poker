import ChipStack from "../../assets/images/poker-chip.svg";
import One from "../images/1.svg";
import Two from "../images/2.svg";

let chipStack = document.getElementsByClassName("chipStack");
let playerInfo = document.getElementsByClassName("player-info");
let player_stack_info = {

}
export default (() => {
    for (let i = 0; i < chipStack.length; i++) {
        let image = document.createElement("img");
        image.setAttribute("class", "chipStackImg");
        image.setAttribute("src", ChipStack);
        chipStack[i].append(image);

        let player_Num = document.createElement("img");
        let player_Chip_Count = document.createElement("p");

        if (i == 0) {
            let chipAmount = player_stack_info[`${i}`] = 50;
            player_Num.setAttribute("src", One);
            player_Num.setAttribute("class", "player_number");
            player_Chip_Count.setAttribute("class", "player_chip_count");
            let textNode = document.createTextNode(`$${chipAmount}`);
            player_Chip_Count.append(textNode);
            playerInfo[i].append(player_Num);
            playerInfo[i].append(player_Chip_Count);
        }
        else if (i == 1) {
            let chipAmount = player_stack_info[`${i}`] = 50;
            player_Num.setAttribute("src", Two);
            player_Num.setAttribute("class", "player_number");
            player_Chip_Count.setAttribute("class", "player_chip_count");
            let textNode = document.createTextNode(`$${chipAmount}`);
            player_Chip_Count.append(textNode);
            playerInfo[i].append(player_Num);
            playerInfo[i].append(player_Chip_Count);
        }

    }
    return player_stack_info;
})();
