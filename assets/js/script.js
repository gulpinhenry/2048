
var board = 
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
        }
    }
    
}
function genPoint(){
    let startX = Math.floor(Math.random()*4);
    let startY = Math.floor(Math.random()*4);
    let val = Math.floor(Math.random()*2 +1)*2;
    console.log("genpt");
    if(board[startX][startY]!=0)
    {
        genPoint();
    }
    let point = {
        "x": startX,
        "y": startY,
        'val': val 
    }
    
    return point;
}
function startBoard(){
    let point = genPoint();
    board[point.x][point.y] = point.val;
    point = genPoint();
    board[point.x][point.y] = point.val;
    renderBoard();
}




startBoard();