let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message = document.querySelector("#message");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userChoice) =>{
    console.log("Your choice is = ",userChoice);
    let compChoice = genCompChoice();
    console.log("Computer choice is = ",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = (compChoice === "paper" ? false: true);
        }
        else if(userChoice === "paper"){
            userWin = (compChoice === "scissor" ? false: true);
        }
        else{
            userWin = (compChoice === "stone" ? false: true);
        }
        showWin(userWin, userChoice, compChoice);
    }
};

const genCompChoice = () =>{
    const options = ["stone","paper","scissor"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drawGame = () =>{
    console.log("Match Draw");
    message.innerText = "Match Draw. Try again";
    message.style.backgroundColor = "red";
};

const showWin = (userWin, userChoice, compChoice) =>{
    if(userWin){
        console.log("You Win");
        message.innerText = `You win! Your ${userChoice} defeats ${compChoice}`;
        message.style.backgroundColor = "green";
    }
    else{
        console.log("You lose");
        message.innerText = `You lose! ${compChoice} defeats Your ${userChoice}. Try Again`;
        message.style.backgroundColor = "blue";
    }
};

