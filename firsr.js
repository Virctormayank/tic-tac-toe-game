let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let newGamebtn = document.querySelector(".new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");



let turnO = true;
const winpatterns = [

[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],
];


const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
 box.addEventListener("click", () => {
 box.innerText = "abcd";
 if(turnO){
    box.innerText = "O";
    turnO = false;
 }else{
box.innerText = "X";
turnO = true;
 }
 box.disabled = true;
 CheckWinner();

    });
});
const disableboxes = () =>{
    for(box of boxes){
         box.disabled = true;
    }
};
const enableboxes = () =>{
    for(box of boxes){
         box.disabled = false;
         box.innerText = "";
    }
};

const showWinner = (winner) =>{
msg.innerText = `Congratulations winner is ${winner}`;
msgcontainer .classList.remove("hide");
disableboxes();
}

const CheckWinner = () => {
    for(let pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    
        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    
    }
};
newGamebtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
