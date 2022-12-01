var number1 = "";
var number2 = "";
var isPlusClicked = false;
var isMinusClicked = false;
var result;

function calcNumbers(number) {

    if(isPlusClicked || isMinusClicked) {
        number2 += number.toString();
        document.title = number2;
    } else {
        number1 += number.toString();
        document.title = number1;
    }
}

function plusSign() {
    isPlusClicked = true;
    document.title = "+";
}

function minusSign() {
    isMinusClicked = true;
    document.title = "-";
}

function eqSign() {
    if(isPlusClicked) {
        result = Number(number1) + Number(number2);
    } else if(isMinusClicked) {
        result = Number(number1) - Number(number2);
    }

    document.title = result;
    isPlusClicked = false;
    isMinusClicked = false;
    number1 = "";
    number2 = "";
}
