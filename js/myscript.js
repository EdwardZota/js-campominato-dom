const containerDom = document.querySelector('.container');

const play = document.getElementById('play');

const title = document.getElementById('title');

const selected = document.getElementById('difficult');

let pointCounter = document.getElementById('pointCounter');

let playerScore=0;


let numberInteraction;

let classBox;

let gridGeneral;

let fullGrid;


let bombArray=[];

let bombCounter=16

let allBomb;





play.addEventListener('click', function(){
    title.classList.add('d-none');

    containerDom.innerHTML="";
    bombArray=[];

    fullGrid = createFullGrid();

    allBomb = bombGenerator(numberInteraction,bombCounter);
    console.log(`questo e l'elenco delle bombe in questa partita se vuoi vincere barando: ${bombArray}`);
    

}
)


//funzioni

//funzione per creare un nuovo quadrato

function createSquare(){
     const currentElement = document.createElement('div');
    currentElement.classList.add('box');

    return currentElement;
}


//funzione di creazione completa della griglia per evitare ripetizione

function createFullGrid(){
    if(selected.value == "easy"){
        numberInteraction=100;
        classBox="box-1";
    
    }else if(selected.value == "medium"){
        numberInteraction=81;
        classBox="box-2";
    
        
    }else if(selected.value == "hard"){
        numberInteraction=49;
        classBox="box-3";
    }

    gridGeneral = general(numberInteraction,classBox);
    
}
// funzione generale completata

function general(numberInteraction,classBox){
    for( let i = 1; i <= numberInteraction; i++){

        const currentSquare = createSquare();
    
        currentSquare.classList.add(classBox);
    
        currentSquare.append(i);
    
        currentSquare.addEventListener('click', function() {

            if(bombArray.includes(i)){
                this.classList.add('red');
                pointCounter.innerHTML=`Partita conclusa con un punteggio di ${playerScore} punti!`;

            }else{
                this.classList.add('cyan');
                playerScore++;

                if(playerScore == (numberInteraction - bombCounter)){
                    pointCounter.innerHTML=`Complimenti! Hai vinto con il punteggio massimo in questa modalità con ${playerScore} punti!`;
                }else{
                    pointCounter.innerHTML=`Il tuo Punteggio è: ${playerScore}`;
                }
            
            }

            console.log(`Hai scelto la casella: ${i}`)
        }
        )
    
        containerDom.append(currentSquare);
    
    }
}
//se numero totale e minore di 

//funzione generatore bombe


function bombGenerator(max,bombNumber){

    for(let i = 1; i <= bombNumber; i++ ){

        let bomb = Math.floor(Math.random() * max) +1;

        if(bombArray[i] != bomb){
            bombArray.push(bomb);
        }

    }

}