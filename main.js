const itemgenerator = document.getElementById("itemgenerator");
const input = document.getElementById("inputnumber");
const correctnumber = document.getElementById("correctnum");
const score = document.getElementById("score");
let highscore = document.getElementById("Highscore");
let userscore = 20;

const generaterandom = Math.floor(Math.random() * 20);
console.log(generaterandom);

itemgenerator.textContent = generaterandom;
document.getElementById("ckeckbtn").addEventListener("click", (event) => {
  event.preventDefault();
  let inputVal = parseInt(input.value);
 if (!inputVal) {
    correctnumber.textContent = "📛Guess a number";
  }
  else if (inputVal !== generaterandom) {
    correctnumber.textContent = "‼‼ Wrong";

    userscore--;
  }
  else if (inputVal === generaterandom) {
    correctnumber.textContent = "✔✔ Correct";
    highscore.textContent = "💥💥 Highscore : " + userscore
    document.getElementById("form").style.backgroundImage =
      "linear-gradient(to top right,rgba(14, 228, 25, 0.9), rgb(10, 235, 74))";
  } else if (highestscore === 10) {
    document.getElementById("form").style.backgroundImage =
      "linear-gradient(to bottom, rgba(241, 11, 11, 0.9),rgb(243, 10, 29))";
    const elements = document.querySelectorAll("h1, p, div, h2, h5, h6");
    alert("you lost the game!!")
    elements.forEach((element) => {
      element.style.color = "white";
    });
  }

  score.textContent = "💯💯   Score :  " + userscore;
});