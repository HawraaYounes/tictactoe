let turn='red';
const head=document.getElementById("head");
let redScore=0;
let yellowScore=0;
const squares=[];//array that stores each square at each index
function winner(){

    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('item'+i).classList;
    }
    if(squares[1]== squares[2] && squares[2]==squares[3] && squares[1]!=""){
        restart(1,2,3);
        console.log(squares[1])
    }
    else if(squares[4]== squares[5] && squares[5]==squares[6] && squares[5]!=""){
        restart(4,5,6);
    }
    else if(squares[7]== squares[8] && squares[8]==squares[9] && squares[9]!=""){
        restart(7,8,9);
    }
    else if(squares[1]== squares[4] && squares[4]==squares[7] && squares[7]!= ''){
        console.log("done")
        restart(1,4,7);
    }
    else if(squares[2]== squares[5] && squares[5]==squares[8] && squares[8]!=""){
        restart(2,5,8);
    }
    else if(squares[3]== squares[6] && squares[6]==squares[9] && squares[9]!=""){
        restart(3,6,9);
    }
    else if(squares[1]== squares[5] && squares[5]==squares[9] && squares[9]!=""){
        restart();
    }
    else if(squares[3]== squares[5] && squares[5]==squares[7] && squares[7]!=""){
        restart();
    }
    

}

function restart(){
    console.log(turn)
    if(turn==='red')
    {
        console.log(turn)
        redScore+=1;
        head.innerHTML="Red Win! Score: "+redScore;
        
    }
    else{
        yellowScore+=1;
        head.innerHTML="Yellow Win! Score: "+yellowScore;
    }
    for(let i=1;i<10;i++){
        squares[i].classList.remove("red");
        squares[i].classList.remove("yellow");
        setTimeout(function(){location.reload()},4000);
    }
}

function playGame(id){//Switching between players turns
    let square=document.getElementById(id);
    if(turn==='red' && square.innerHTML==""){
        turn='yellow';
        square.classList.add("red");
        head.innerHTML="Hey Yellow! It's your turn "
    }
    else if(turn==='yellow' && square.innerHTML==""){
        turn='red';
        square.classList.add("yellow");
        head.innerHTML="Hey Red! It's your turn "

    }
    winner();
}