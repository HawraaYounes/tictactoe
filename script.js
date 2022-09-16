let turn='red';
const head=document.getElementById("head");
function playGame(id){
    let square=document.getElementById(id);
    if(turn==='red' && square.innerHTML==""){
        turn='yellow';
        square.classList.add("red");
        head.innerHTML("Hey Yellow! It's your turn ")
    }
    else if(turn==='yellow' && square.innerHTML==""){
        turn='red';
        square.classList.add("yellow");
        head.innerHTML("Hey Red! It's your turn ")
    }

}
