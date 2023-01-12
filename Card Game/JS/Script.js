var frontImages = [
    {imgSrc: "../Images/Card images/Earth.png", name: "Earth"},
    {imgSrc: "../Images/Card images/Pluto.png", name: "Pluto"},
    {imgSrc: "../Images/Card images/Uranus.png", name: "Uranus"},
    {imgSrc: "../Images/Card images/Neptune.png", name: "Neptune"},
    {imgSrc: "../Images/Card images/Venus.png", name: "Venus"},
    {imgSrc: "../Images/Card images/Mercury.png", name:"Mercury"},
    {imgSrc: "../Images/Card images/Mars.png", name: "Mars"},
    {imgSrc: "../Images/Card images/Saturn.png", name: "Saturn"},
    {imgSrc: "../Images/Card images/Jupiter.png", name: "Jupiter"}
    ],

doubleFrontImages = frontImages.concat(frontImages),
cardBackImgPath = "../Images/Card images/Card_back.png",

startGameButton = document.getElementById("startGame"),
scoresWrapper = document.querySelector(".scoresWrapper"),
scoreCount = document.getElementById("score"),
highScoreCount = document.getElementById("highScore"),
timerWrapper = document.querySelector(".timerWrapper"),
timer = document.querySelector(".timer"),
restartGameButton = document.querySelector (".restartButton"),
cardsWrapper = document.querySelector(".cardsWrapper"),
gameOverBackground = document.querySelector(".gameOverBackground"),
gameOver = document.getElementById("gameOver"),
victoryBackground = document.querySelector(".victoryBackground"),
victory = document.getElementById("victory"),
finalScore = document.querySelectorAll(".finalScore"),
losingScore = document.getElementById("losingScore"),
winningScore = document.getElementById("winningScore"),
tryAgainButton = document.getElementById("tryAgainButton"),
time = 60,
intervalId,
highScore = 0,
score = 0;

startGameButton.addEventListener("click", startGame);
startGameButton.addEventListener("click", cardGenerator);
startGameButton.addEventListener("click", startInterval);
restartGameButton.addEventListener("click", restart);
tryAgainButton.addEventListener("click", startGame);
tryAgainButton.addEventListener("click", startInterval);

function startGame() {
startGameButton.classList.add("hidden");
gameOverBackground.classList.add("hidden");
gameOver.classList.add("hidden");
for(var i=0; i < finalScore.length; i++){ 
    finalScore[i].classList.add("hidden");
}
tryAgainButton.classList.add("hidden");
victoryBackground.classList.add("hidden");
victory.classList.add("hidden");
winningScore.classList.add("hidden");
scoresWrapper.classList.remove("hidden");
timerWrapper.classList.remove("hidden");
restartGameButton.classList.remove("hidden");
cardsWrapper.classList.remove("hidden");
}

/* Променливата cardFrontImages = doubleFrontImages; се създава с цел да променяш (разбъркваш) променливата
cardFrontImages, а оригиналния масив, който е в doubleFrontImages да си остава подреден и да не го пипаш!
Трябва return преди Math.random, защото му казваш върни ми резултата от тази операция(Math.random), а без return то просто ще извърши
Math.random() - 0.5 и дотам, а с return ще ти върне тази стойност и ще може да я ползва за .sort После имаш return cardFrontImages по
същата логика, то извъшрва операцията Math.random, връща ти рандъм числото и после извършва операцията cardFrontImages.sort и ти
разбърква масива. И по същата логика го разбърква и дотам, разбъркания масив си остава в тази функция само и, за да може да го ползваш
в друга функция трябва да му кажеш return cardFrontImages и така вече ще ти запази и връща разбъркания масив*/
function shuffle() {
var cardFrontImages = doubleFrontImages;
cardFrontImages.sort(function(){
    return Math.random() - 0.5;       
});
return cardFrontImages;
}

function cardGenerator() {
var cardFrontImages = shuffle();
/* Долния ред казва следното: Изпълни ми функция(без име, защото браузъра си я извиква всеки път чрез .forEach все
едно имаш цикъл, който се изпълнява докато не мине всички елементи) за всеки елемент от масива cardFrontImages и 
функцията трябва да приема параметър item, което реално ти е всеки един обект от масива, за да може да вземеш
source за лицето на картите */
cardFrontImages.forEach(function(item) {
    var card = document.createElement("div"),
        cardFront = document.createElement("img"),
        cardBack = document.createElement("img");

    card.classList.add("card");
    cardFront.classList.add("cardFront");
    cardBack.classList.add("cardBack");
    card.setAttribute("name", item.name);
    cardFront.src = item.imgSrc;
    cardBack.src = cardBackImgPath;

    cardsWrapper.appendChild(card);
    card.appendChild(cardFront);
    card.appendChild(cardBack); 

    card.addEventListener("click", flipCard);
});
}

function flipCard(event) {
var card = event.currentTarget;
card.classList.toggle("cardToggle");

matchCheck(event);
}

function matchCheck(event) {
var clickedCard = event.currentTarget;
clickedCard.classList.add("flipped");

var flippedCards = document.querySelectorAll(".flipped");

if(flippedCards.length === 2) {
    if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")) {
        flippedCards.forEach(function(clickedCard) {
            clickedCard.classList.remove("flipped");
            setTimeout(function() {
                clickedCard.classList.add("cardMatch"); 
                clickedCard.classList.remove("cardToggle"); 
            }, 1500)
        });
        setTimeout(function() {
            score += 100;
            scoreCount.textContent = "Score: " + score;
            for(var i=0; i < finalScore.length; i++) {
                finalScore[i].textContent = "Final score: " + score;
            }
            if(score > highScore) {
                highScore = score;
                highScoreCount.textContent = "High score: " + highScore;
            }
            if(score === 900) {
                clearInterval(intervalId);
                scoresWrapper.classList.add("hidden");
                timerWrapper.classList.add("hidden");
                restartGameButton.classList.add("hidden");
                cardsWrapper.classList.add("hidden");
                victoryBackground.classList.remove("hidden");
                victory.classList.remove("hidden");
                winningScore.classList.remove("hidden");
                tryAgainButton.classList.remove("hidden");
                restart();
            }
        }, 1500);
    } 
    else {
        flippedCards.forEach(function(clickedCard) {
            clickedCard.classList.remove("flipped");
            setTimeout(function() {
                clickedCard.classList.remove("cardToggle")
            }, 1500);
        });
    }
}
}

function restart() {
var cardFrontImages = shuffle(),
    cardFront = document.querySelectorAll(".cardFront"),
    cards = document.querySelectorAll(".card");

    cardFrontImages.forEach(function(item, index){
        cards[index].classList.remove("cardMatch");
        cardFront[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
    });
score = 0;
scoreCount.textContent = "Score: " + score;
time = 60;
}

function timeCountdown() {
while (time > 0) {
    time --;
    return time;
}
}

function syncTimeAndTimer() {
var time = timeCountdown(),
    totalTime = 60,
    timeLeft = (time / totalTime) * 100;

    timer.setAttribute("style", "width: " + timeLeft + "%");
    
if(timeLeft === 0) {
    clearInterval(intervalId);
    scoresWrapper.classList.add("hidden");
    timerWrapper.classList.add("hidden");
    restartGameButton.classList.add("hidden");
    cardsWrapper.classList.add("hidden");
    gameOverBackground.classList.remove("hidden");
    gameOver.classList.remove("hidden");
    losingScore.classList.remove("hidden");
    tryAgainButton.classList.remove("hidden");
    restart();
}
}

function startInterval() {
intervalId = setInterval(syncTimeAndTimer, 1000);
}