let colors = ["#069090","#cc0a0a","#0abd07","yellow"];
const square = document.querySelector(".square");
const colorBox = document.querySelector(".magicBox")
const squareWrapped = document.querySelector("#wrapped");
square.style.backgroundColor= colors[0]


square.addEventListener("click",function(){
    let index = 0
    colorBox.innerText = colors[index]
    colorBox.style.backgroundColor= colors[index]

})


for(let index = 1; index<colors.length; index++){

    const newSquare = square.cloneNode()
    squareWrapped.appendChild(newSquare),
    newSquare.style.backgroundColor=colors[index]
    newSquare.addEventListener("click",coloredBox);

    function coloredBox(){
        colorBox.innerText = colors[index]

    colorBox.style.backgroundColor=colors[index];

    }

}
