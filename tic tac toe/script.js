const container = document.querySelector(".container");
const box = container.querySelectorAll(".box");
const reset = document.querySelector('.reset');
const X = document.querySelector('.X');
const O = document.querySelector('.O');
let pointer = 'X';


reset.addEventListener('click', resetBoard);
X.addEventListener('click', xClicked);

function xClicked(e){
  pointer = 'X';
  
}
O.addEventListener('click', oClicked);

function oClicked(e){
  pointer = 'O';
  
}


//reset board
function resetBoard(e){
    for (let i = 0; i < box.length; i++) {
      box[i].innerText = '';
    }
    
}
//adds X when a div is clicked
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", boxClicked);
}

function boxClicked(e) {
  if (e.target.innerText == "") {
    e.target.textContent = pointer;
  }
}
