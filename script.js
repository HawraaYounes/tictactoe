let turn='red';
const head=document.getElementById("head");

const squares=[];//array that stores each square at each index
function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('item+${id}');
        console.log(squares[i])
    }
}


function playGame(id){//Switching between players turns
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
winner();