const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
let result = document.querySelector("#result");
let counter = 0;

// Addition
add.addEventListener('click', function() {
    counter++;
    result.innerHTML = counter;
});
// Subtraction
subtract.addEventListener('click', function() {
    if (counter > 0) {
        counter--;
        result.innerHTML = counter;
    }
});
