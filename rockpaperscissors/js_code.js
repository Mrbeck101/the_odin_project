const cont = document.querySelector('#container');
const btns = document.querySelectorAll('button');
var cpu_sc = 0;
var ply_sc = 0;

function RNDint(min, max){
    return (Math.floor(Math.random() * (max-min)) + min);
    
}

function computer_play(){
    let i = RNDint(1, 4);
    
    if (i == 1){
        console.log(i);
        return "Rock";
    }
    else if (i == 2){
        console.log(i);
        return "Paper";
    }
    else{ 
        console.log(i);
        return "Scissors";
    }
    
}

function playRound(pc, cc){
    if (pc.toLowerCase() == "rock" && cc.toLowerCase() == "paper"){
        console.log("You lost to Paper");
        cpu_sc++;
    }
    else if(pc.toLowerCase() == "paper" && cc.toLowerCase() == "scissors"){
        console.log("You lost to Scissors");
        cpu_sc++;
    }
    else if(pc.toLowerCase() == "scissors" && cc.toLowerCase() == "rock"){
        console.log("You lost to Rock");
        cpu_sc++;
    }
    else if(pc.toLowerCase() == cc.toLowerCase()){
        console.log ("Tie Try Again");
    }
    else{
        console.log("You won!!, The cpu chose " + cc);
        ply_sc++;
    }

    return;
}






//while(1){
    //console.log(cpu);
    //let playerchoice = prompt("Rock, Paper, or Scissors?");
    

    btns.forEach((button) => {
        button.addEventListener('click', (e) => {
            let cpu = computer_play();
            if (button.id == "1") {
                playRound("Rock", cpu);
            }
            else if (button.id == "2"){
                playRound("Paper", cpu);
            }
            else {
                playRound("Scissors", cpu);
            }

            if ((cpu_sc + ply_sc) == 5) {
                while(1) {
                    if (cpu_sc > ply_sc) {
                        alert("Winning player is cpu!!!")
                    }
                    else {
                        alert("Winning player is you!!!")
                    }
                    
                }
            }
        })
    })
