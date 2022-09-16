let turn='red';
const head=document.getElementById("head");

const squares=[];//array that stores each square at each index
function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('item'+i).innerHTML;
    }
    if(squares[1]== squares[2] && squares[2]==squares[3] && squares[1]!=""){

    }
    else if(squares[4]== squares[5] && squares[5]==squares[6] && squares[5]!=""){

    }
    else if(squares[7]== squares[8] && squares[8]==squares[9] && squares[9]!=""){

    }
    else if(squares[1]== squares[4] && squares[4]==squares[7] && squares[7]!=""){

    }
    else if(squares[2]== squares[5] && squares[5]==squares[8] && squares[8]!=""){

    }
    else if(squares[3]== squares[6] && squares[6]==squares[9] && squares[9]!=""){

    }
    else if(squares[1]== squares[5] && squares[5]==squares[9] && squares[9]!=""){

    }
    else if(squares[3]== squares[5] && squares[5]==squares[7] && squares[7]!=""){

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