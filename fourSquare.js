let colors = ["#069090","#cc0a0a","#0abd07","yellow"];
const square = document.querySelector(".square");
const squareWrapped = document.querySelector("#wrapped");
square.style.backgroundColor= colors[0]
let index = 0


for(let index = 1; index<colors.length; index++){

let paragraph = document.getElementById("p");
let text = document.createTextNode(colors[index]);

    const newSquare = square.cloneNode()
    squareWrapped.appendChild(newSquare),
    newSquare.style.backgroundColor=colors[index]
    newSquare.addEventListener("click",coloredBox);

function coloredBox(){

colorBox.style.backgroundColor=colors[index];
paragraph.appendChild(text);


}

}

const colorBox = document.querySelector(".magicBox")

// function deleteText(text){
//     text.remove();
// }
// deleteText(text)