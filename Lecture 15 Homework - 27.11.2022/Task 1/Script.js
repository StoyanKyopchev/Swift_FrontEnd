var isButtonClicked = false;

function onButtonClick() {

    if(isButtonClicked) {
        document.querySelector(".tooltipItem > .plus").innerHTML = "+";
        document.querySelector(".tooltipItem > .tooltipWrapper").setAttribute("style", "display: none");
        isButtonClicked = false;
    } else {
        document.querySelector(".tooltipItem > .plus").innerHTML = "-";
        document.querySelector(".tooltipItem > .tooltipWrapper").setAttribute("style", "display: block");
        isButtonClicked = true;
    }
}

