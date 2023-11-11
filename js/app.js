let screen = document.getElementById("screen");
let counter = 0;

function updateScreen() {
    screen.textContent = counter;
}

// increment and decrement functions
function ButtonClick(event) {
    const buttonValue = event.target.textContent;

    if (buttonValue === '+') {
        counter++;
    } else if (buttonValue === '-') {
        if (counter > 0) {
            counter--;
        }
    }
    updateScreen();
}

let buttonContainer = document.getElementById("button-container");
buttonContainer.addEventListener("click", ButtonClick);

// Create buttons for increment and decrement
let incrementButton = document.createElement("button");
incrementButton.textContent = "+";
buttonContainer.appendChild(incrementButton);

let decrementButton = document.createElement("button");
decrementButton.textContent = "-";
buttonContainer.appendChild(decrementButton);

updateScreen();