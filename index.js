function displayvalue(val) {
    document.getElementById("display").value += val;
}

function calculate() {
    let exp = document.getElementById("display").value;

    if (exp === "") {
        return; // do nothing if empty
    }

    try {
        document.getElementById("display").value = eval(exp);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

function clearscreen() {
    document.getElementById("display").value = "";
}
