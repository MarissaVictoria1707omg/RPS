let you = 0;
let com = 0;
const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");
const computerChoice = document.querySelector(".comp > p");
const scores = document.querySelector(".scores");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function convert(letter) {
    if(letter === "r") return "rock";
    if(letter === "p") return "paper";
    if(letter === "s") return "scissors";
}

function AIChoice() {
    const choices = ['r','p','s']
    const randNum = Math.floor(Math.random()*3);
    return choices[randNum];
}

function win(youChoice,comChoice) {
    you++;
    userScore.innerHTML = you;
    computerScore.innerHTML = com;
    computerChoice.innerHTML = "computer choice: " + convert(comChoice);
    result.innerHTML = convert(youChoice) + " beats " + convert(comChoice) + ". you win!";
}
function lose(youChoice,comChoice) {
    com++;
    userScore.innerHTML = you;
    computerScore.innerHTML = com;
    computerChoice.innerHTML = "computer choice: " + convert(comChoice);
    result.innerHTML = convert(comChoice) + " beats " + convert(youChoice) + ". you lost";
}function draw(youChoice,comChoice) {
    computerChoice.innerHTML = "computer choice: " + convert(comChoice);
    result.innerHTML = convert(youChoice) + " and " + convert(comChoice) + " are the same. its a draw";
}

function game(youChoice) {
    const comChoice = AIChoice();
    switch(youChoice + comChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(youChoice,comChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(youChoice,comChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(youChoice,comChoice);
            break; 
    }
}

function main() {
    rock.addEventListener('click', function() {
        game("r");
    })
    paper.addEventListener('click', function() {
        game("p");
    })
    scissor.addEventListener('click', function() {
        game("s")
    })
}
main();