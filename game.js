<script>

    function computerPlay(){
        //returns randomly rock, paper or scissors
        let computerChoices = ["rock","paper","scissors"];
        let randomChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
        return randomChoice;
    }

    
    function playRound(playerSelection, computerSelection){
        //play a round of the game and returns winner
        let result="";
        let tie ="It's a tie!";
        
        switch(computerSelection){
            case "rock": 
                if (playerSelection == "scissors"){
                    result ="You lose, rock beats scissors!";
                }
                else if(playerSelection == "paper"){
                    result ="You win, paper beats rock!";
                }
                else if(playerSelection == computerSelection){
                    result = tie;
                }
                else{
                    result ="Try again!";
                }
                break;

            case "paper":
                if (playerSelection == "rock"){
                    result = "You loose, paper beats rock!";
                }
                else if(playerSelection=="scissors"){
                    result = "You win, scissors beat paper!";
                }
                else if(playerSelection == computerSelection){
                    result = tie;
                }
                else{
                    result ="Try again!";
                }
                break;

                case "scissors":
                if(playerSelection == "rock"){
                    result = "You win! Rock beats Scissors";
                } 
                else if(playerSelection == "paper"){
                    result = "You lose! Scissors beats Paper";
                } 
                else if (computerSelection == playerSelection) {
                    result = draw;
                } 
                else{
                    result = "Try again!";
                }
                break;
        }
    return result;
    }

    function game(){
        let userScore = 0;
        let computerScore = 0;
        let message ="";

        for (var i=1; i<=5; i++){
            let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
            let computerSelection = computerPlay();
            result = playRound(playerSelection, computerSelection);
            console.log("Round "+i +": "+ result);
        
        if(result.includes("win")){
            userScore +=1;
        }
        else{
            computerScore +=1;
        }

        if(userScore > computerScore){
            message = "Congrats! You are the winner";
        }
        else{
            message = "Boo! Looser!";
        }
      }
      console.log("You: "+userScore+ "\nComputer: "+computerScore);
    }
    
    game();

</script>