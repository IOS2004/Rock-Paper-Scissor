
function getComputerChoice()
{
  let a = Math.random();
  a = a * 100;
  if (a <= 33)
    return "rock";
  else if (a <= 66)
    return "scissor";
  else 
    return "paper";
}

function getHumanChoice()
{
  let ask = prompt("Tell your choice: ");
  ask = ask.toLowerCase();
  if (ask != "rock" && ask != "paper" && ask != "scissor")
  {
    console.log("Invalid choice");
    return getHumanChoice();
  }
  return ask;
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
  console.log("Human choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);
  if (humanChoice == computerChoice)
  {
    return "Tie! " + humanChoice + " ties to " + computerChoice;
  }
  if (humanChoice == "rock")
  {
    if (computerChoice == "paper")
    {
      computerScore = computerScore + 1;
      return "Paper beats rock, Computer wins! ";
    }
    else{
      humanScore++;
      return "Rock beats Scissor, Human wins! ";
    }
  }
  else if (humanChoice == "paper")
  {
    if (computerChoice == "rock")
    {
      humanScore++;
      return "Paper beats rock, Human wins! ";
    }
    else{
      computerScore++;
      return "Scissor beats paper, Computer wins! ";
    }
  }
  else 
  {
    if (computerChoice == "rock")
    {
      computerScore++;
      return "Rock beats Scissor, Computer wins! ";
    }
    else{
      humanScore++;
      return "Scissor beats paper, human wins!"; 
    }
  }
}

for (let i = 1; i <= 5; i++)
{
  console.log("Round " + i + " fight! ");
  console.log(playRound(getHumanChoice(), getComputerChoice()));
}

console.log("Final score is: Computer - " + computerScore + " Human - " + humanScore);