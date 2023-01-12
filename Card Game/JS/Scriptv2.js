var frontImages = [{src: "../Images/Card images/Earth.png"},
                   {src: "../Images/Card images/Pluto.png"},
                   {src: "../Images/Card images/Uranus.png"},
                   {src: "../Images/Card images/Neptune.png"},
                   {src: "../Images/Card images/Venus.png"},
                   {src: "../Images/Card images/Mercury.png"},
                   {src: "../Images/Card images/Mars.png"},
                   {src: "../Images/Card images/Saturn.png"},
                   {src: "../Images/Card images/Jupiter.png"}],


/*var frontImages = ["../Images/Card images/Earth.png",
                   "../Images/Card images/Pluto.png",
                   "../Images/Card images/Uranus.png",
                   "../Images/Card images/Neptune.png",
                   "../Images/Card images/Venus.png",   
                   "../Images/Card images/Mercury.png",
                   "../Images/Card images/Mars.png",
                   "../Images/Card images/Saturn.png",
                   "../Images/Card images/Jupiter.png"], */

    doubleImages = frontImages.concat(frontImages),
    cardBackImgPath = "../Images/Card images/Card_back.png",

    startGameButton = document.getElementById("startGame"),
    scoresWrapper = document.querySelector(".scoresWrapper"),
    timerWrapper = document.querySelector(".timerWrapper"),
    restartGameButton = document.querySelector (".restartButton"),
    cardsWrapper = document.querySelector(".cardsWrapper");

    startGameButton.addEventListener("click", startGame);

function startGame() {
    addClassToElement(startGameButton, "hidden");
    removeClassFromElement(scoresWrapper, "hidden");
    removeClassFromElement(timerWrapper, "hidden");
    removeClassFromElement(restartGameButton, "hidden");
    removeClassFromElement(cardsWrapper, "hidden");

    createCard();
}

function createCard() {

    for (var i = 0; i < 18; i++) {
        var cardElement = document.createElement("div"),
            cardInnerElement = document.createElement("div"),
            cardFrontElement = document.createElement("div"),
            cardBackElement = document.createElement("div"),
            cardFrontImgElement = document.createElement("img"),
            cardBackImgElement = document.createElement("img");

        addClassToElement(cardElement, "card");
        addClassToElement(cardInnerElement, "cardInner");
        addClassToElement(cardFrontElement, "cardFront");
        addClassToElement(cardBackElement, "cardBack");
        addClassToElement(cardFrontImgElement, "cardImage");
        addClassToElement(cardBackImgElement, "cardImage");

        addSrcToImg(cardBackImgElement, cardBackImgPath);
        /*addSrcToImg(cardFrontImgElement, frontImages[i]);   Трябва да се направи така, че да започва да минава 
        пак през масива след като вече е минал всичките картинки веднъж.*/
        testFunction(cardFrontImgElement, doubleImages);

        addChildElement(cardsWrapper, cardElement);
        addChildElement(cardElement, cardInnerElement);
        addChildElement(cardInnerElement, cardBackElement);
        addChildElement(cardInnerElement, cardFrontElement);
        addChildElement(cardBackElement, cardBackImgElement);
        addChildElement(cardFrontElement, cardFrontImgElement);

        /*Тук ще трябва да добавиш и функция, която добавя event listener на всяка карта за функцията, която ще 
        ги завърта при клик */
    }
}

function addChildElement(parentElement, childElement) {
    parentElement.appendChild(childElement);
}

function addClassToElement(element, className) {
    element.classList.add(className);
}

function removeClassFromElement(element, className) {
    element.classList.remove(className);
}

function addSrcToImg(imgElement, src) {
    imgElement.src = src;
}

/*Ако имаш splice, за да не взима картинка по повече от 2 пъти ще трябва при restart и try again масива пак да
се запълва, защото иначе ще пуснеш играта веднъж и при едно нареждане на картите чак при refresh на страницата
ще работи като хората пак! */   
function testFunction(imgElement, doubleImages) {    //replaced src with doubleImages
    var usedImages = [];
    for(var i = 0; i < doubleImages.length; i++) {
        var randomIndex = Math.floor(Math.random() * doubleImages.length);
        var randomElement = doubleImages[randomIndex];

        imgElement.src = randomElement.src;
        
        if(usedImages.includes(randomElement)) {
            doubleImages.splice(randomIndex, 1);
        } else {
            usedImages.push(randomElement);
        }
        //doubleImages.splice(randomIndex, 1); // splice does not work correctly.
    }
}
