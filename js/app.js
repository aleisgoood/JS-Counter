const screen = document.getElementById("screen");
let counter = 0;

const updateScreen = () => {
    screen.textContent = counter;
};

const ButtonClick = (event) => {
    const buttonValue = event.target.textContent;

    if (buttonValue === '+' && counter < Number.MAX_SAFE_INTEGER) {
        counter++;
    } else if (buttonValue === '-' && counter > 0) {
        counter--;
    }

    updateScreen();
};
// creating buttons 
const buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", ButtonClick);

const createButton = (text) => {
    const button = document.createElement("button");
    button.textContent = text;
    buttonContainer.appendChild(button);
};

createButton("+");
createButton("-");
updateScreen();
