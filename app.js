let computerGuess;
let userGuess=[];
let audio1 = new Audio('./audio/start.mp3');
// let audio2 = new Audio('./audio/loose.mp3');
let audio3 = new Audio('./audio/win.mp3');


const init = ()=>{
    computerGuess = Math.floor(Math.random()*100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";

};

const startgame = ()=>{
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}
// reload the page
const newGameBegin = ()=>{
    audio1.play();
    window.location.reload();
};

const startNewGame = ()=>{
    document.getElementById("newGameButton").style.display = "inline";
    userNumberUpdate.setAttribute("disabled",true);
    audio1.play();
};

// main logic
const compareGuess = ()=>{
    // audio2.play();
    audio3.play();
    let userGuessUpdate = document.getElementById("textOutput");
    let userNumberUpdate = document.getElementById("inputBox");
    const userNumber = Number(document.getElementById("inputBox").value);
    
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // check the value is high or low
   
    if(userGuess.length < maxGuess ){
         if(userNumber > computerGuess){
        userGuessUpdate.innerHTML = "Your guess is high!!!";
        userNumberUpdate.value = "";
    }else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML = "Your guess is Low!!!";
        userNumberUpdate.value = "";

    }else{
        userGuessUpdate.innerHTML = " Wooo! Your guess is correct";
        userNumberUpdate.value = "";
        startNewGame();
    } 
}else{
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML = `You Loose!!! Correct Number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    }else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML = `You Loose!!! Correct Number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();

    }else{
        userGuessUpdate.innerHTML = " Wooo! Your guess is correct";
        userNumberUpdate.value = "";
        audio3.play();
        startNewGame();
}
}
    document.getElementById("attempts").innerHTML = userGuess.length;

};

const easyMode = ()=>{
    audio1.play();
    maxGuess = 10;
    startgame();
}

const hardMode = ()=>{
    // audio2.play();
    audio1.play();
    maxGuess = 5;
    startgame();
}


