var i;
var editAsideButton = document.querySelector(".EditPageButton");
editAsideButton.addEventListener("click", navExpand);

var addPersonBtn = document.getElementById("AddOnePerson");
//addPersonBtn.addEventListener("click", addCard);  - moved to navExpand()

function navExpand() {
    var editAsideExpand = document.querySelector(".EditPeopleWrapper");
    editAsideButton.classList.toggle("EditPageButton--active");
    editAsideExpand.classList.toggle("EditPeopleWrapper--expanded");
    var isAsideExpanded = editAsideExpand.classList.contains("EditPeopleWrapper--expanded");

    if(isAsideExpanded) {
        editAsideButton.innerHTML = "Stop Editing";
    }
    else {
        editAsideButton.innerHTML = "Edit";
    }

    addPersonBtn.innerHTML = "+ Add person";
    addPersonBtn.addEventListener("click", addCard);
}

function addCard() {
    var getValue = document.querySelectorAll(".EditPeopleInput");
    var createCards = document.createElement ("div");
    var cardWrapper = document.querySelector(".PeopleCardWrapper");

    createCards.classList.add("PersonCard");
    createCards.addEventListener("click", navExpand);
    createCards.addEventListener("click", editCard);
    createCards.innerHTML = 
        `<div class='PersonImage'></div> 
        <div class='PersonName'></div> 
        <div class='personJobTitle'></div> 
        <div class='eMail'></div> 
        <div class='PersonPhoneNumber'></div>`;

    cardWrapper.appendChild(createCards);

    var cardsPlaceholder = document.querySelector(".PeopleCardsContainer");
    cardsPlaceholder.classList.add("PeopleCardsContainer--hidden");

    var cardValue = createCards.querySelectorAll(".PersonCard div");

    for(i = 0; i < getValue.length; i++) {
        cardValue[i+1].innerHTML = getValue[i].value;
        getValue[i].value = "";
    }

    function editCard(event) {
        var selectedCard = event.target;
        selectedCard.classList.add("PersonCard--active");
        addPersonBtn.innerHTML="Save";
        addPersonBtn.classList.add("buttonSwap");
        var hasButtonChanged = addPersonBtn.classList.contains("buttonSwap");
        document.getElementById("AddOnePerson").removeEventListener("click", addCard);
        document.getElementById("AddOnePerson").addEventListener("click", saveChanges);
    
        for(i = 0; i < cardValue.length; i++) {
            getValue[i].value = cardValue[i+1].innerHTML;
        }

        function saveChanges() {
            if(hasButtonChanged) {
                for(i = 0; i < getValue.length; i++) {
                    cardValue[i+1].innerHTML = getValue[i].value;
                    getValue[i].value = "";
                    addPersonBtn.classList.remove("buttonSwap");
                }
                selectedCard.classList.remove("PersonCard--active");
                document.getElementById("AddOnePerson").removeEventListener("click", saveChanges);
            }
        }
    }
}