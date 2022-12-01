var inputValue;
var validationResult;

function numberValidation() {
    validationResult = document.querySelector(".phoneValidationResult");

    inputValue = document.querySelector(".phoneNumber").value;

    if(!isNaN(inputValue) 
        && inputValue > 0 
        && inputValue.length >= 6 
        && inputValue.length <= 10
    ) {
        validationResult.innerHTML = "Валиден";
    }
    else {
        validationResult.innerHTML = "Невалиден";
    }
}