const User_name = window.prompt("Enter your name : ");
document.getElementById("username").innerHTML = User_name;


//array for images
const images =[
    
    {
        id:1,
        img:"images/rock.png"
    },
    {
        id:2,
        img:"images/paper.png"
    },
    {
        id:3,
        img:"images/scissor.png"
    }


];


//DOM
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const img = document.getElementById("img");
const c_img = document.getElementById("c-img");
// const win_or_loss_tie = document.getElementById("winner");
const won = document.getElementById("winner");

//event listeners for every buttons
let user=0,pc=0,winner=0;
rock.addEventListener("click",function(){
    img.src = images[0].img;
    let number = randomNumber();
    c_img.src = images[number].img;
    user = 0;
    pc = number;
    console.log(user + " "+ pc);
    winner = getwinner();
    setWinner();
})
paper.addEventListener("click",function(){
    img.src = images[1].img;
    let number = randomNumber();
    c_img.src = images[number].img;
    user = 1;
    pc = number;
    console.log(user + " "+ pc);
    winner = getwinner();
    setWinner();
})
scissor.addEventListener("click",function(){
    img.src = images[2].img;
    let number = randomNumber();
    c_img.src = images[number].img;
    user = 2;
    pc = number;
    console.log(user + " "+ pc);
    winner = getwinner();
    setWinner();
})


// function which return random numbers
function randomNumber(){
    return Math.floor(Math.random() * images.length);
}

function setWinner()
{
    console.log(user + " "+ pc);
    let winner = getwinner();
    if(winner == 1){
      won.innerHTML = User_name + " Won The Game";
      won.style.visibility="visible";
      won.style.color="green";
      console.log("user won the game");
    }else if(winner == 2){
      won.innerHTML = "Computer Won The Game";
      won.style.visibility="visible";
      won.style.color="red";
    }else{
      won.innerHTML = "Match has been tied";
      won.style.visibility="visible";
      won.style.color="rgb(11, 131, 131)";
      console.log("tied");
    }
}

function getwinner(){
    
    if(user == 0 && pc == 1){
        return 2;
    }
    else if(user == 0 && pc == 2){
        return 1;
    }
    else if(user == 1 && pc == 0){
        return 1;
    }
    else if(user == 1 && pc == 2){
        return 2;
    }
    else if(user == 2 && pc == 0){
        return 2;
    }
    else if(user == 2 && pc == 1){
        return 1;
    }
    else{
        return 0;
    }
}


//win loss deciding code




