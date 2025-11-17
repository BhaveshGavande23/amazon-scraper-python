function displayvalue(val) {
    document.getElementById("display").value += val;
}

function calculate() {
    let expression = document.getElementById("display").value;
    let result = eval(expression);  // calculate result
    document.getElementById("display").value = result;
}

function clearScreen() {
    document.getElementById("display").value = "";
}

