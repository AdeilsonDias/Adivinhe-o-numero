const buttonStart = document.querySelector("#button_Start");
const containerStart = document.querySelector(".container_start");
const container_game = document.querySelector(".container_game");
const numberValue = document.querySelector("#input_number");
const btnGuess= document.querySelector("#btn_check");
const guessed_number = document.querySelector("#guessed_number");

const startGame = () => {
    containerStart.classList.add("disabled");
    container_game.classList.add("active");
}
const checknumber =()=>{
    const number = numberValue.value;
    const ramdomNumber = Math.floor(Math.random()*100);
    
    if(number == ""){
        guessed_number.innerHTML = "Você não digitou nenhum número";
        return;
    }else{
    if(number == ramdomNumber){
        guessed_number.innerHTML = `Parabéns, o número adivinhado foi : <span>${ramdomNumber}</span>`;
        
    }else{
        guessed_number.innerHTML = `Você perdeu,o número escolhido foi : <span>${ramdomNumber}</span>`;
        
    }
    numberValue.value = "";
    }
    
}


buttonStart.addEventListener("click", startGame);
btnGuess.addEventListener("click", checknumber);
