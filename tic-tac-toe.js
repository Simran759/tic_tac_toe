let boxes = document.querySelectorAll("#box");
let reset = document.querySelector("#reset");
let newp = document.querySelector("#new");
let message = document.querySelector(".message");
let msg = document.querySelector("#msg");
let turn0 = true; 

const winningPattern = [[0, 4, 8], [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
       
        box.innerText = turn0 ? "O" : "X";
        box.disabled = true; 
        turn0 = !turn0; 
        checkWinner(); 
    });
});

const checkWinner = () => {
    for (let pattern of winningPattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        
        if (pos1val !== "" && pos1val === pos2val && pos1val === pos3val) {
            showWinner(pos1val); 
            return; 
        }
    }
}

const showWinner = (winner) => {
    disable();
    msg.innerText = `Congratulations, Winner is ${winner}`; 
    message.classList.remove("hide");
}

const resetGame = () => {
    turn0 = true; 
    enable(); 
    message.classList.add("hide"); 
}

const disable = () => {
    boxes.forEach((a) => {
        a.disabled = true; 
    });
}

const enable = () => {
    boxes.forEach((a) => {
        a.disabled = false; 
        a.innerText = ""; 
    });
}

newp.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
