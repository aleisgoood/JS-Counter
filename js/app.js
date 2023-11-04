let counter = 0;
const result = document.querySelector("#result");
const buttonContainer = document.getElementById("button-container");

// addition button
const addButton = document.createElement('button');
addButton.textContent = '+';
addButton.addEventListener('click', function() {
    counter++;
    result.innerHTML = counter;
});

//subtraction button - not below 0
const subtractButton = document.createElement('button');
subtractButton.textContent = '-';
subtractButton.addEventListener('click', function() {
    if (counter > 0) {
        counter--;
        result.innerHTML = counter;
    }
});

buttonContainer.appendChild(subtractButton);
buttonContainer.appendChild(addButton);
