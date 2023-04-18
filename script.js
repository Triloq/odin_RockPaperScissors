/*
Generate NPC Choice: Rock, Paper, Scissors
Input PC Choice: Rock, Paper, Scissors
Determine Winner based on: Rock > Scissors, Scissors > Paper, Paper > Rock
Output Winner to Screen
*/



function getComputerChoice() {
   // Rock - 0,  Scissors - 1,  Paper - 2
   let compChoice = Math.floor(Math.random()*3);
   switch (compChoice) {
        case 0: return "Rock"; break;
        case 1: return "Scissors"; break;
        case 2: return "Paper"; break;
   }
}

function playRound(pc_Choice){
    let npc_Choice = getComputerChoice().toLowerCase();
    //let pc_Choice = prompt("Rock... Paper... Scissors... SHOOT!: ").toLowerCase();
    let winner; // 0 - draw, 1 - win, 2 - lose
    let scoreKeep;

    if (pc_Choice == npc_Choice){
        winner = "This round is a Draw!";
        scoreKeep = 'draw';
    }
    else if (pc_Choice == "scissors" && npc_Choice == "rock" ||
            pc_Choice == "paper" && npc_Choice == "scissors" ||
            pc_Choice == "rock" && npc_Choice == "paper")
    {
        winner = "You Lose this round! " + npc_Choice.charAt(0).toUpperCase() + npc_Choice.slice(1) +
                " beats " + pc_Choice.charAt(0).toUpperCase() + pc_Choice.slice(1);
        scoreKeep = 'lose';
        }
    
    else if (npc_Choice == "scissors" && pc_Choice == "rock" ||
            npc_Choice == "paper" && pc_Choice == "scissors" ||
            npc_Choice == "rock" && pc_Choice == "paper")
    {
        winner = "You Win this round! " + pc_Choice.charAt(0).toUpperCase() + pc_Choice.slice(1) +
            " beats " + npc_Choice.charAt(0).toUpperCase() + npc_Choice.slice(1);
        scoreKeep = 'win';
    }
    
    return [winner, scoreKeep];
}

// function game() {
//     let keepGoing = "True";
//     while(keepGoing){
//         console.log(playRound());
//     }}
// game();

// select the container div
const div = document.querySelector('div');
// add a header with start text
const startText = document.createElement('h3');
startText.textContent = "Rock, Paper, Scissors... SHOOT!";
// create 3 buttons
const btn1 = document.createElement('button');
btn1.textContent = "Rock";
btn1.classList.add('rock');
const btn2 = document.createElement('button');
btn2.textContent = "Paper";
btn2.classList.add('paper');
const btn3 = document.createElement('button');
btn3.textContent = "Scissors";
btn3.classList.add('scissors');
// create div for results
const results = document.createElement('div');
results.classList.add('results');
// add the elements to the container div
div.appendChild(startText);
div.appendChild(btn1);
div.appendChild(btn2);
div.appendChild(btn3);
div.appendChild(results);
// selector for all buttons
const buttons = document.querySelectorAll('button');
// selector for results div, create 2 <p> for result and score
const resultDiv = document.querySelector('.results');
const resP = document.createElement('p');
const score = document.createElement('p');
resP.textContent = "The winner is..."
score.textContent = "Score: Player -   Computer - ";
resP.classList.add('results')
score.classList.add('score');
resultDiv.appendChild(resP);
resultDiv.appendChild(score);
// add final result <p>
const final = document.createElement('p');
final.classList.add('final');
resultDiv.appendChild(final);
// listener events
let pcScore = 0;
let npcScore = 0;
buttons.forEach(btn => {
    btn.addEventListener('click', event => {
        let results = playRound(event.target.classList.value);
        // console.log(results);
        resP.textContent = `${results[0]}`;
        if(results[1] === 'win'){
            pcScore++;
        }
        else if(results[1] === 'lose'){
            npcScore++;
        }
        score.textContent = "Score: "+"Player - "+pcScore+
            " Computer - "+npcScore;
        let end = endScore();
        if(end){
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
        }
        // if(pcScore === 5){
        //     final.textContent = "YOU WIN!";
        //     btn.disabled = true;
        // }          
        // else if(npcScore === 5){
        //     final.textContent = "COMPUTER WINS!";
        //     btn.disabled = true;
        // }
    })
})

function endScore(){
    if(pcScore === 5){
        final.textContent = "YOU WIN!";
        return true;
    }          
    else if(npcScore === 5){
        final.textContent = "COMPUTER WINS!";  
        return true;
    }
}

