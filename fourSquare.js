const square = document.querySelector(".square");
const squareWrapped = document.querySelector("#wrapped");
square.style.backgroundColor="#069090"

for (let i = 1; i <4;i++){
const newSquare = square.cloneNode();
squareWrapped.appendChild(newSquare); 
if(i==1){
    newSquare.style.backgroundColor="#cc0a0a"
} else if (i==2){
    newSquare.style.backgroundColor="#0abd07"
}else if (i==3) {
    newSquare.style.backgroundColor="yellow"
}
}

//faire la meme chose pour les couleurs mais avec un tableau et oublier le if ! 