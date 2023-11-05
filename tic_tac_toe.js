let cnt = 0;
let array = [[0,0,0],[0,0,0],[0,0,0]];
let kk = 0;
function SetBoard(){
    document.getElementById('start').remove();
    document.getElementById('reset').style.display = 'block';
    for(let i = 0 ; i < 3 ; i++){
        for(let j = 0 ; j < 3 ; j++){
            let a = document.createElement('div');
            let c = i.toString() + '-' + j.toString();
            a.id = c;
            a.classList.add('tile');
            a.addEventListener('click',icon);
            if(i == 0) a.classList.add('top');
            if(j == 0) a.classList.add('left');
            if(i == 2) a.classList.add('bottom');
            if(j == 2) a.classList.add('right');
            document.getElementById("board").appendChild(a);
        }
    }
    
}

function icon(){
    if(this.innerText == ''){
        if(cnt%2 == 0){
            this.style.backgroundImage = 'url("images/cross.png")';
            this.style.backgroundSize = 'cover';
            cnt++;
            let cords = this.id.split('-');
            array[cords[0]][cords[1]] = 1;
        }
        else{
            this.style.backgroundImage = 'url("images/oww.png")';
            this.style.backgroundSize = 'cover';
            cnt++;
            let cords = this.id.split('-');
            array[cords[0]][cords[1]] = 2;
        }
    }

    check();
    console.log(cnt);
    if(cnt == 9 && !check()){
        console.log(cnt);
        let a = document.getElementById("message");
        a.style.display = "block";
        setTimeout(()=>{
            window.location.reload();
        },2000);
    }
}

function check(){
    if(array[0][0] != 0 && array[0][0] == array[1][1] && array[1][1] == array[2][2]){
        markWinningCells([[0, 0], [1, 1], [2, 2]]);
        return true;
    }
    if(array[0][2] != 0 && array[0][2] == array[1][1] && array[1][1] == array[2][0]){
        markWinningCells([[0, 2], [1, 1], [2, 0]]);
        return true;
    }
    if(array[0][0] != 0 && array[0][1] == array[0][0] && array[0][1] == array[0][2]){
        markWinningCells([[0, 0], [0, 1], [0, 2]]);
        return true;
    }
    if(array[1][0] != 0 && array[1][1] == array[1][0] && array[1][1] == array[1][2]){
        markWinningCells([[1, 0], [1, 1], [1, 2]]);
        return true;
    }
    if(array[2][0] != 0 && array[2][1] == array[2][0] && array[2][1] == array[2][2]){
        markWinningCells([[2, 0], [2, 1], [2, 2]]);
        return true;
    }
    if(array[0][0] != 0 && array[0][0] == array[1][0] && array[1][0] == array[2][0]){
        markWinningCells([[0, 0], [1, 0], [2, 0]]);
        return true;
    }
    if(array[0][1] != 0 && array[0][1] == array[1][1] && array[1][1] == array[2][1]){
        markWinningCells([[0, 1], [1, 1], [2, 1]]);
        return true;
    }
    if(array[0][2] != 0 && array[0][2] == array[1][2] && array[1][2] == array[2][2]){
        markWinningCells([[0, 2], [1, 2], [2, 2]]);
        return true;
    }
    return false;
}

function markWinningCells(cells) {
    for(let cell of cells){
        let c = cell[0].toString() + '-' + cell[1].toString();
        let k = document.getElementById(c);
        k.classList.add('winning-cell');
        k.style.backgroundImage = 'none';
        if(cnt%2 != 0){
            setTimeout(() => {
                k.style.backgroundImage = 'url("images/cross.png")'; 
            }, 500);
        }
        else{
            setTimeout(() => {
                k.style.backgroundImage = 'url("images/oww.png")'; 
            }, 500);
        }
    }
    setTimeout(()=>{
        window.location.reload();
    },2000);
    
}

function load(){
    window.location.reload();
}


