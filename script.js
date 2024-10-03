let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const message = document.querySelector('#message');

const userScorepara = document.querySelector('#user-score');
const compScorepara = document.querySelector('#comp-score');


const genCompChoice = () =>{
    const options =["rock" , "paper" ,"scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () =>{
    message.innerText = "Ops! Draw";
    message.style.backgroundColor = "#081b31";
};

const showWinner = (userWin , userChoice , compChoice) =>{
      if (userWin){
        userScore++;
        userScorepara.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
      } else{
        compScore++;
        compScorepara.innerText = compScore;
        message.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
      }
};


const playGame = (userChoice) => {

const compChoice = genCompChoice();
   


    if (userChoice === compChoice){
       drawGame();
    }else{
        let userWin = true;

        if (userChoice === "rock"){
            //paper , scissor
            userWin = compChoice === "paper" ? false : true;
        
        } else if  (userChoice === "paper") {
            //rock , scissor
            userWin = compChoice === "scissor" ? false : true;

        } else{
            //paper , rock
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin , userChoice , compChoice);
    }

};

choices.forEach((choice) => {
 
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);

    });
});