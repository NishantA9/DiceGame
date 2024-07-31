function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

    document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage1);
    document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

document.querySelector("button").addEventListener("click", rollDice);

function refreshPage() {
    document.querySelector("h1").innerHTML = "I am your Score Board!";
    document.getElementsByClassName("img1")[0].setAttribute("src", "dice6.png");
    document.getElementsByClassName("img2")[0].setAttribute("src", "dice6.png");
}

refreshPage();


//Use the random number you created in the last step to pick out a random dice image between dice1.png to dice 6.png then place this image inside the left <img> element.
//Hint: You will need to use what you've learnt about the DOM and the method setAttribute() to achieve this.
// var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
//change the title of the website to declare the winner
//When click on roll dice button, the page will refresh

// var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
// var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6

// var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
// var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; //dice1.png - dice6.png

// document.getElementsByClassName("img1")[0].setAttribute("src", randomDiceImage1);
// document.getElementsByClassName("img2")[0].setAttribute("src", randomDiceImage2);

// if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
// } else if (randomNumber2 > randomNumber1) { 
//     document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
// } else {
//     document.querySelector("h1").innerHTML = "Draw!";
// }   

// document.querySelector("button").addEventListener("click", function() {
//     window.location.reload();
// });


    
