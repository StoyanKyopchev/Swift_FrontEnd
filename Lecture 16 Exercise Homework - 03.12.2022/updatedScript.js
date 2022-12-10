var i;
var editAsideButton = document.querySelector(".EditPageButton");
editAsideButton.addEventListener("click", navExpand);

var addPersonBtn = document.getElementById("AddOnePerson");
addPersonBtn.addEventListener("click", addCard);

var saveChangesBtn = document.getElementById("SaveButton");
var getValue = document.querySelectorAll(".EditPeopleInput");

function navExpand() {
    addPersonBtn.classList.remove("AddOnePerson--hidden");
    saveChangesBtn.classList.add("SaveButton--hidden");
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
}

function addCard() {
    var createCards = document.createElement ("div");
    var cardWrapper = document.querySelector(".PeopleCardWrapper");

    createCards.classList.add("PersonCard");
    createCards.addEventListener("click", navExpand);
    createCards.addEventListener("click", function(event) {
        editCard(event, cardValue);
    });
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
}

function editCard(event, cardValue) {
    saveChangesBtn.classList.remove("SaveButton--hidden");
    addPersonBtn.classList.add("AddOnePerson--hidden");
    event.target.classList.add("PersonCard--active");
    saveChangesBtn.addEventListener("click", function(){
        saveChanges(event, cardValue);
    });

    for(i = 0; i < cardValue.length-1; i++) {
        getValue[i].value = cardValue[i+1].innerHTML;
    }
}

function saveChanges(event, cardValue) {
    for(i = 0; i < getValue.length; i++) {
        cardValue[i+1].innerHTML = getValue[i].value;
        getValue[i].value = "";
    }
    event.target.classList.remove("PersonCard--active");
}