function displayvalue(val) {
    document.getElementById("display").value += val;
}

function calculate() {
    let exp = document.getElementById("display").value;
    if (exp) {
        document.getElementById("display").value = eval(exp);
    }
}

function clearscreen() {
    document.getElementById("display").value = "";
}
