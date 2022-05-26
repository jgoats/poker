import DealerButton from "../images/dealerbutton.jpg";
import UpdateBlindsInDOM from "./createblindsindom.js";

export default function (button, playerInfo) {

    let buttonContainer = document.getElementsByClassName("button-location");

    if (buttonContainer[0].hasChildNodes()) {
        buttonContainer[0].removeChild(buttonContainer[0].firstChild)
    }
    else if (buttonContainer[1].hasChildNodes()) {
        buttonContainer[1].removeChild(buttonContainer[1].firstChild)
    }

    let image = document.createElement("img");
    image.setAttribute("src", DealerButton);
    image.setAttribute("class", "button-image");
    image.setAttribute("id", "dealer-btn");


    if (button.result == 1) {
        // distribute the button to player 2
        if (buttonContainer[0].firstChild) buttonContainer[0].removeChild(buttonContainer[0].firstChild);
        buttonContainer[1].appendChild(image);
        playerInfo["1"] = playerInfo["1"] - 0.25;
        playerInfo["0"] = playerInfo["0"] - 0.50;
        UpdateBlindsInDOM(playerInfo);
    }
    else if (button.result == 0) {
        // distribute the button to player 1
        if (buttonContainer[1].firstChild) buttonContainer[1].removeChild(buttonContainer[1].firstChild);
        buttonContainer[0].appendChild(image);
        playerInfo["1"] = playerInfo["1"] - 0.50;
        playerInfo["0"] = playerInfo["0"] - 0.25;
        UpdateBlindsInDOM(playerInfo);
    }
} 