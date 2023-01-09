var imageNames = ["Earth",
                "Jupiter",
                "Mars",
                "Mercury",
                "Neptune",
                "Pluto",
                "Saturn",
                "Uranus",
                "Venus"],

    imageUrls = ['url("../Images/Card images/Earth.png")',
                'url("../Images/Card images/Jupiter.png")',
                'url("../Images/Card images/Mars.png")',
                'url("../Images/Card images/Mercury.png")',
                'url("../Images/Card images/Neptune.png")',
                'url("../Images/Card images/Pluto.png")',
                'url("../Images/Card images/Saturn.png")',
                'url("../Images/Card images/Uranus.png")',
                'url("../Images/Card images/Venus.png")'],

    startGameButton = document.getElementById("startGame"),
    scoresWrapper = document.querySelector(".scoresWrapper"),
    timerWrapper = document.querySelector(".timerWrapper"),
    restartGameButton = document.querySelector (".restartButton"),
    cardsWrapper = document.querySelector(".cardsWrapper"),
    cards = document.querySelectorAll(".cards");

    startGameButton.addEventListener("click", startGame);

function startGame(imagesObj) {         // Трябва ли imagesObj?
    startGameButton.classList.add("hidden");
    scoresWrapper.classList.remove("hidden");
    timerWrapper.classList.remove("hidden");
    restartGameButton.classList.remove("hidden");
    cardsWrapper.classList.remove("hidden");

    createCards(imagesObj);         // Трябва ли imagesObj?
}

function createCards(imagesObj) {

    for(var i = 0; i < 18; i++) {
        var card = document.createElement("div");

        card.classList.add("cardBack");
        card.addEventListener("click", function(event) {
            cardFlip(event, imagesObj); // Трябва ли imagesObj?
        });

        cardsWrapper.appendChild(card);
    }
}

function getFrontImages() {
    var imagesObj = {};

    for(var i = 0; i < imageNames.length; i++) {
        var objKey = imageNames[i];
        imagesObj[objKey] = imageUrls[i];
    }
    return imagesObj;
}

function cardFlip(event, imagesObj) {
    var currentCard = event.currentTarget;

    currentCard.classList.toggle("cardBack");
    currentCard.classList.toggle("cardFrontEarth");
    //currentCard.innerHTML = applyFrontImage(imagesObj);
}