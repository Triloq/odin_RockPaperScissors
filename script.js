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

function playRound(){
    let npc_Choice = getComputerChoice().toLowerCase();
    let pc_Choice = prompt("Rock... Paper... Scissors... SHOOT!: ").toLowerCase();
    let winner; // 0 - draw, 1 - win, 2 - lose

    console.log(npc_Choice);
    console.log(pc_Choice);
    if (pc_Choice == npc_Choice){
        winner = "Draw!";
    }
    else if (pc_Choice == "scissors" && npc_Choice == "rock" ||
            pc_Choice == "paper" && npc_Choice == "scissors" ||
            pc_Choice == "rock" && npc_Choice == "paper")
    {
        winner = "You Lose! " + npc_Choice.charAt(0).toUpperCase() + npc_Choice.slice(1) +
                " beats " + pc_Choice.charAt(0).toUpperCase() + pc_Choice.slice(1);
    }
    // else if (pc_Choice == "paper" && npc_Choice == "scissors"){
    //     winner = "You Lose! Scissors beats Paper";
    // }
    // else if (pc_Choice == "rock" && npc_Choice == "paper"){
    //     winner = "You Lose! Paper beats Rock";
    // }
    else if (npc_Choice == "scissors" && pc_Choice == "rock" ||
            npc_Choice == "paper" && pc_Choice == "scissors" ||
            npc_Choice == "rock" && pc_Choice == "paper")
    {
        winner = "You Win! " + pc_Choice.charAt(0).toUpperCase() + pc_Choice.slice(1) +
            " beats " + npc_Choice.charAt(0).toUpperCase() + npc_Choice.slice(1);
    }
    // else if (npc_Choice == "paper" && pc_Choice == "scissors"){
    //     winner = "You Win! Scissors beats Paper";
    // }
    // else if (npc_Choice == "rock" && pc_Choice == "paper"){
    //     winner = "You Win! Paper beats Rock";
    // }
    return winner;
}

function game() {
    let keepGoing = "True";
    while(keepGoing){
        console.log(playRound());
    }
}

game();