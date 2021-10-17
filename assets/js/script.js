
const board = 
[[0,0,0,0],
[0,0,0,0],
[0,0,0,0],
[0,0,0,0]];

function renderBoard(){
    console.log("renderboard");
    console.log(board);
    for(let i = 0; i<board.length; i++)
    {
        for(let j = 0; j<board[i].length; j++)
        {
            if(board[i][j]!=0)
            {
                $(`#val-${i}-${j}`).text(board[i][j]);
            }
            else{
                $(`#val-${i}-${j}`).text("");
            }
        }
    }
    
}
function genPoint(){
    let startX = Math.floor(Math.random()*4);
    let startY = Math.floor(Math.random()*4);
    let val = Math.floor(Math.random()*2 +1)*2;
    console.log("genpt");
    
    let point = {
        "x": startX,
        "y": startY,
        'val': val 
    }
    if(board[startX][startY]!=0)
    {
        genPoint();
    }
    else{
        return point;
    
    }
    
}

function pushUp(){
    for(let i = 0; i<board.length; i++)
    {
        let cur = 0;
        while(cur<board.length && board[i][cur]!=0)
        {
            cur++;
        }
        if(cur>=board.length)
            continue;
        for(let j = 0; j<board.length; j++)
        {
            if(board[i][j]==0)
            {
                continue;
            }
            else if(j>cur){
                board[i][cur] = board[i][j];
                board[i][j] = 0;
                cur++;
            }
        }
    }
}
function shiftUp(){
    // shift array
    pushUp();
    for(let i = 0; i<board.length; i++)
    {
        let val = 0;
        while(val+1<board.length)
        {
            if(board[i][val+1]==board[i][val])
            {
                board[i][val]*=2;
                board[i][val+1] = 0;
                pushUp();
                
            }
            val++;
        }
    }
    let point = genPoint(); //promise
    board[point.x][point.y] = point.val;
    renderBoard();
}

function pushDown(){
    for(let i = 0; i<board.length; i++)
    {
        let cur = board.length-1;
        while(cur>=0 && board[i][cur]!=0)
        {
            cur--;
        }
        if(cur<0)
            continue;
        for(let j = board.length-1; j>=0; j--)
        {
            if(board[i][j]==0)
            {
                continue;
            }
            else if(j<cur){
                board[i][cur] = board[i][j];
                board[i][j] = 0;
                cur--;
            }
        }
    }
}

function shiftDown(){
    pushDown();
    for(let i = 0; i<board.length; i++)
    {
        let val = board.length-1;
        while(val-1>=0)
        {
            if(board[i][val-1]==board[i][val])
            {
                board[i][val]*=2;
                board[i][val-1] = 0;
                pushDown();
                
            }
            val--;
        }
    }
    let point = genPoint(); //promise
    board[point.x][point.y] = point.val;
    renderBoard();
}
function shiftLeft(){
    // shift array
    let point = genPoint(); //promise
    board[point.x][point.y] = point.val;
    renderBoard();
}
function shiftRight(){
    // shift array
    let point = genPoint(); // pormise
    board[point.x][point.y] = point.val;
    renderBoard();
}

$(document).keydown(function(e){ //update array, then render
    if (e.which == 37) { 
        console.log("left pressed");
        shiftLeft();
        return false;
    }
    else if(e.which == 38) { 
        console.log("up pressed");
        shiftUp();
        return false;
    }
    else if(e.which == 39) { 
        console.log("right pressed");
        shiftRight();
        return false;
    }
    else if(e.which == 40) { 
        console.log("down pressed");
        shiftDown();
        return false;
    }
});


function startBoard(){
    let point = genPoint()
    board[point.x][point.y] = point.val;
    point = genPoint();
    board[point.x][point.y] = point.val;
    renderBoard();
    // promises or something
    
    
}




startBoard();