let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let newbtn = document.querySelector(".new");
let msg = document.querySelector(".msg");

let turn0 = true;

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const resetGame = () =>{
  turn0 = true;
  enable();
  msgContainer.classList.add("hide");
};

const drawGame = () =>{
  msg.innerText = "Draw !!";
};

const disable = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
};

const enable = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = '';
  }
};

let ct = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "O";
      box.style.color = "green";
      turn0 = false;
      ct++;
    }
    else {
      box.innerText = "X";
      box.style.color = "red";
      turn0 = true;
      ct++;
    }
    box.disabled = true;

    checkwinner();
  });
});

const showwinner = (winner) =>{
  msg.innerHTML = `Congratulations, winner is ${winner} `;
  msgContainer.classList.remove("hide");
};

const checkwinner = () => {
  for (let patterns of winPattern) {
    let pos1 = boxes[patterns[0]].innerText;
    let pos2 = boxes[patterns[1]].innerText;
    let pos3 = boxes[patterns[2]].innerText;

    if (pos1 != '' && pos2 != '' && pos3 != '') {
      if (pos1 === pos2 && pos2 === pos3) {
        disable();
        showwinner(pos1);
      }
      else if(ct >= 9){
        drawGame();
      }
    }
  }
};

newbtn.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);