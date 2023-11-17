

const playerMoves = document.querySelectorAll(".game-btn");
const playerMoveDisplay = document.getElementById("playerMoveDisplay");
const compMoveDisplay = document.getElementById("compMoveDisplay");
const matchResult = document.getElementById("matchResult");


let move;
let one;
let bot;

playerMoves.forEach((moves) => {
    moves.addEventListener("click", function() {
        move = moves.id;   
        displayPlayerMove();
        displayComputerMove();

        playerMoveDisplay.placeholder = one;
        compMoveDisplay.placeholder = bot;

        
        matchResult.placeholder = checkWinner();
    })
});


let displayPlayerMove = () =>{
    if(move == "myRock"){
        one = "ROCK";
    }
    else if(move == "myPaper"){
        one = "PAPER";
    }
    else if(move == "myScissor"){
        one = "SCISSOR";
    }
};


let displayComputerMove = () => {
    const computerRandomMove = Math.round(Math.random() * 2);
    switch(computerRandomMove){
        case 0:
            bot = "ROCK"
            break;
        case 1:
            bot = "PAPER"
            break;
        case 2:
            bot = "SCISSOR"
            break; 
    }
}

let checkWinner = () => {
    if(bot == one){
        return "MATCH DRAW";
    }
    else if(one == "ROCK"){
        return(bot == "SCISSOR") ? `WINNER: ${one}`: `WINNER: ${bot}`;
    }
    else if(one == "PAPER"){
        return(bot == "ROCK") ? `WINNER: ${one}`: `WINNER: ${bot}`;
    }
    else if(one == "SCISSOR"){
        return(bot == "PAPER") ? `WINNER: ${one}`: `WINNER: ${bot}`;
    }
}