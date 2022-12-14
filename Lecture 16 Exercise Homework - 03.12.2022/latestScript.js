var i;
var editAsideButton = document.querySelector(".EditPageButton");
editAsideButton.addEventListener("click", navExpand);

var stopEditingAsideButton = document.querySelector(".StopEditingPageButton");
stopEditingAsideButton.addEventListener("click", navCollapse);

var editAsideExpand = document.querySelector(".EditPeopleWrapper");

var addPersonBtn = document.getElementById("AddOnePerson");
addPersonBtn.addEventListener("click", addCard);

var saveChangesBtn = document.getElementById("SaveButton");
var getValue = document.querySelectorAll(".EditPeopleInput");

function navExpand() {
    stopEditingAsideButton.classList.remove("hideElements");
    stopEditingAsideButton.classList.add("StopEditingPageButton--active");
    editAsideButton.classList.add("hideElements");
    editAsideExpand.classList.add("EditPeopleWrapper--expanded");
    addPersonBtn.classList.remove("hideElements");
    saveChangesBtn.classList.add("hideElements");
    //var isAsideExpanded = editAsideExpand.classList.contains("EditPeopleWrapper--expanded");
//
    //if(isAsideExpanded) {
    //    editAsideButton.innerHTML = "Stop Editing";
    //}
    //else {
    //    editAsideButton.innerHTML = "Edit";
    //}
}

function navCollapse() {
    stopEditingAsideButton.classList.add("hideElements");
    editAsideButton.classList.remove("hideElements");
    editAsideExpand.classList.remove("EditPeopleWrapper--expanded");
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
    cardsPlaceholder.classList.add("hideElements");

    var cardValue = createCards.querySelectorAll(".PersonCard div");

    for(i = 0; i < getValue.length; i++) {
        cardValue[i+1].innerHTML = getValue[i].value;
        getValue[i].value = "";
    }
}

function editCard(event, cardValue) {
    var card = event.target;
    saveChangesBtn.classList.remove("hideElements");
    addPersonBtn.classList.add("hideElements");
    var activeCard = document.querySelector(".PersonCard--active");

    if(activeCard) {
        activeCard.classList.remove("PersonCard--active");
    }

    card.classList.add("PersonCard--active");
    saveChangesBtn.addEventListener("click", function(){
        saveChanges(card, cardValue);
    });

    for(i = 0; i < cardValue.length-1; i++) {
        getValue[i].value = cardValue[i+1].innerHTML;
    }
}

function saveChanges(card, cardValue) {
    for(i = 0; i < getValue.length; i++) {
        cardValue[i+1].innerHTML = getValue[i].value;
        getValue[i].value = "";
    }
    card.classList.remove("PersonCard--active");
}