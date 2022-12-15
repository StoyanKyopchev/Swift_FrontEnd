var peopleArr = [],

    buttonsWrapper = document.querySelector(".buttonsWrapper"),
    editButton = document.querySelector(".editButton"),
    addPersonButton = document.getElementById("AddOnePerson"),
    saveButton = document.getElementById("SaveButton"),

    sideMenu = document.querySelector(".EditPeopleWrapper"),
    allInputs = document.querySelectorAll(".EditPeopleInput"),
    cardWrapper = document.querySelector(".PeopleCardWrapper"),
    cardsPlaceholder = document.querySelector(".PeopleCardsContainer");

    editButton.addEventListener("click", sideMenuToggle);
    addPersonButton.addEventListener("click", addPersonBtnClick);
    saveButton.addEventListener("click", saveBtnClick);


    function sideMenuToggle() {
        editButton.classList.toggle("editButton--active");
        sideMenu.classList.toggle("EditPeopleWrapper--expanded");
    }

    function addPersonBtnClick() {
        var person = getFormValues();
        peopleArr.push(person);

        addCard(person);
        clearForm();
    }

    function getFormValues() {
        var person = {};

        for(var i = 0; i < allInputs.length; i++) {
            var objKey = allInputs[i].getAttribute("name");
            person[objKey] = allInputs[i].value;
        }
        return person;
    }

    function addCard(person) {
        var card = document.createElement ("div");

        card.dataset.id = peopleArr.length - 1;
        card.classList.add("PersonCard");
        card.addEventListener("click", selectCard);
        card.innerHTML = getCardContent(person);
        
        cardWrapper.appendChild(card);
    }

    function getCardContent(person) {
        var cardContent = 
            "<div class='PersonImage'></div>" +
            "<div class='PersonName'>" + person.firstname + "</div>" +
            "<div class='personJobTitle'>" + person.job + "</div>" +
            "<div class='PersonPhoneNumber'>" + person.phone + "</div>" +
            "<div class='eMail'>" + person.email + "</div>";

        return cardContent;
    }

    function fillFormValues(person) {
        var inputName = sideMenu.querySelector(".EditPeopleInput[name='firstname']"),
            inputJob = sideMenu.querySelector(".EditPeopleInput[name='job']"),
            inputPhone = sideMenu.querySelector(".EditPeopleInput[name='phone']"),
            inputEmail = sideMenu.querySelector(".EditPeopleInput[name='email']");

        inputName.value = person.firstname;
        inputJob.value = person.job;
        inputPhone.value = person.phone;
        inputEmail.value = person.email;
    }

    function selectCard(event) {
        var currentCard = event.currentTarget,
            cardId = currentCard.dataset.id,
            person = peopleArr[cardId],
            isCardSelected = false;
        
        isCardSelected = currentCard.classList.contains("PersonCard--active");
        clearSelectedState();

        if(!isCardSelected) {
            currentCard.classList.add("PersonCard--active");
            buttonsWrapper.classList.add("buttonsWrapper--edit");
            fillFormValues(person);
        }
        else {
            clearForm();
            buttonsWrapper.classList.remove("buttonsWrapper--edit");
        }
    }

    function clearSelectedState() {
        var selectedCards = document.querySelectorAll(".PersonCard");

        for(var i = 0; i < selectedCards.length; i++) {
            selectedCards[i].classList.remove("PersonCard--active");
        }
    }

    function clearForm() {
        for(var i = 0; i < allInputs.length; i++) {
            allInputs[i].value = "";
        }
    }

    function saveBtnClick() {
        var activeCard = document.querySelector(".PersonCard--active"),
            cardId = activeCard.dataset.id,
            person = getFormValues();
        
        peopleArr[cardId] = person;
        activeCard.innerHTML = getCardContent(person);
        clearSelectedState();
        clearForm();
        buttonsWrapper.classList.remove("buttonsWrapper--edit");
    }
