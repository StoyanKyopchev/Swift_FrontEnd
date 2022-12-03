var isButtonClicked = false;

function onButtonClick() {

    if(isButtonClicked) {
        document.querySelector(".plus").innerHTML = "+";
        document.querySelector(".tooltipWrapper").setAttribute("style", "display: none");
        isButtonClicked = false;
    } else {
        document.querySelector(".plus").innerHTML = "-";
        document.querySelector(".tooltipWrapper").setAttribute("style", "display: block");
        isButtonClicked = true;
    }
}

