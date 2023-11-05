let prevDiv = null;
let new_id = []
let pawn,bishop,rook,king,queen,knight;
let prev_bishop,prev_king,prev_knight,prev_pawn,prev_rook,prev_queen;
let selected_div;
let prev_color , color , prev_Gcolor , Gcolor;
let chance = 0;
let ele = ['rook','knight','bishop','queen','king'];

function Choice(){
    if(chance%2 != 0){
        document.getElementById('choice').innerText = "GOLD TURN";
        document.getElementById('choice').style.color = 'gold';
    }
    else{
        document.getElementById('choice').innerText = "SILVER TURN";
        document.getElementById('choice').style.color = 'silver';
    }
}

function SetImage(a,b){
    document.getElementById(a).style.backgroundImage = b;
    document.getElementById(a).style.backgroundSize = 'cover';
    document.getElementById(a).style.textAlign = "center";
    document.getElementById(a).style.backgroundPosition = "center";
    document.getElementById(a).style.backgroundSize = "50px 50px";
}

function SetName(a,b){
    for(let i = 0 ; i < a.length ; i++)
        document.getElementById(a[i]).classList.add(b);
}

function load(){
    window.location.reload();
}

function SetBoard(){
    document.getElementById('start').remove();
    document.getElementById('reset').style.display = 'inline';
    document.getElementById("board").style.display = 'flex';
    document.getElementById("choice").style.display = 'flex';
    for(let i = 0 ; i < 8 ; i++){
        for(let j = 0 ; j < 8 ; j++){
            let a = document.createElement("div");
            a.id = i + '-' + j;
            a.classList.add('box');
            a.addEventListener('click',select);
            if((i+j)%2 == 0) a.classList.add('color');
            if(i == 0 || i == 1) a.classList.add('gold');
            if(i == 6 || i == 7) a.classList.add('silver');
            document.getElementById("board").appendChild(a);
        }
    }

    for(let i = 0 ; i < 8 ; i++){
        let a = 1 + '-' + i;
        let b = 6 + '-' + i;
        SetName([a,b],'pawn');
        SetImage(a,"url('images/Gpawn.png')");
        SetImage(b,"url('images/Spawn.png')");
    }

    for(let i = 0 ; i <= 4 ; i++){
        let a = 0 + '-' + i;
        let aa = 0 + '-' + (7-i);
        let aaa = `url('images/${i}.png')`;
        let b = 7 + '-' + i;
        let bb = 7 + '-' + (7-i);
        let bbb = `url('images/${i}${i}.png')`;

        SetImage(a,aaa);
        SetImage(b,bbb);
        if(i < 3){
            SetImage(aa,aaa);
            SetImage(bb,bbb);
            SetName([a,aa,b,bb],ele[i]);
            
        }
        else SetName([a,b],ele[i]);
    }

}

function Remove(){
    for(let i = 0 ; i < new_id.length ; i++)
        document.getElementById(new_id[i]).style.backgroundColor = '';
    new_id.splice(0, new_id.length);
}

function Move(){
    Remove();

    let PGcolor = prevDiv.classList.contains('gold');
    let SGcolor = selected_div.classList.contains('gold');
    let PScolor = prevDiv.classList.contains('silver');
    let SScolor = selected_div.classList.contains('silver');

    if(PGcolor){
        if(!SGcolor){
            Choice(++chance);
            let image = prevDiv.style.backgroundImage;
            SetImage(selected_div.id,image);
            selected_div.classList.add('gold');
            if(pawn) selected_div.classList.remove('pawn');
            if(knight) selected_div.classList.remove('knight');
            if(bishop) selected_div.classList.remove('bishop');
            if(king) selected_div.classList.remove('king');
            if(queen) selected_div.classList.remove('queen');
            if(rook) selected_div.classList.remove('rook');
            if(prev_pawn) selected_div.classList.add('pawn');
            if(prev_knight) selected_div.classList.add('knight');
            if(prev_bishop) selected_div.classList.add('bishop');
            if(prev_king) selected_div.classList.add('king');
            if(prev_queen) selected_div.classList.add('queen');
            if(prev_rook) selected_div.classList.add('rook');
            prevDiv.style.backgroundImage = '';
            prevDiv.style.backgroundColor = '';
            prevDiv.classList.remove('gold');
            prevDiv = null;
            if(SScolor) selected_div.classList.remove('silver');
        }
        
        else{
            if(pawn){
                selected_div.classList.add('pawn');
                Pawn(selected_div);
            }
            if(knight){
                selected_div.classList.add('knight');
                Knight(selected_div);
            }
            if(bishop){
                selected_div.classList.add('bishop');
                Bishop(selected_div);
            }
            if(king){
                selected_div.classList.add('king');
                King(selected_div);
            }
            if(queen){
                selected_div.classList.add('queen');
                Queen(selected_div);
            }
            if(rook){
                selected_div.classList.add('rook');
                Rook(selected_div);
            }
            prevDiv.style.backgroundColor = '';
            selected_div.style.backgroundColor = "lightgreen";
            prevDiv = selected_div;
            return;
        }
    }
    if(PScolor){
        if(!SScolor){
            Choice(++chance);
            if(chance%2 != 0){
                document.getElementById('choice').innerText = "GOLD TURN";
                document.getElementById('choice').style.color = 'gold';
            }
            else{
                document.getElementById('choice').innerText = "SILVER TURN";
                document.getElementById('choice').style.color = 'silver';
            }
            let image = prevDiv.style.backgroundImage;
            SetImage(selected_div.id,image);
            selected_div.classList.add('silver');
            if(pawn) selected_div.classList.remove('pawn');
            if(knight) selected_div.classList.remove('knight');
            if(bishop) selected_div.classList.remove('bishop');
            if(king) selected_div.classList.remove('king');
            if(queen) selected_div.classList.remove('queen');
            if(rook) selected_div.classList.remove('rook');
            if(prev_pawn) selected_div.classList.add('pawn');
            if(prev_knight) selected_div.classList.add('knight');
            if(prev_bishop) selected_div.classList.add('bishop');
            if(prev_king) selected_div.classList.add('king');
            if(prev_queen) selected_div.classList.add('queen');
            if(prev_rook) selected_div.classList.add('rook');
            prevDiv.style.backgroundImage = '';
            prevDiv.style.backgroundColor = '';
            prevDiv.classList.remove('silver');
            prevDiv = null;
            if(SGcolor) selected_div.classList.remove('gold');
        }
        else{
            if(pawn){
                selected_div.classList.add('pawn');
                Pawn(selected_div);
            }
            if(knight){
                selected_div.classList.add('knight');
                Knight(selected_div);
            }
            if(bishop){
                selected_div.classList.add('bishop');
                Bishop(selected_div);
            }
            if(king){
                selected_div.classList.add('king');
                King(selected_div);
            }
            if(queen){
                selected_div.classList.add('queen');
                Queen(selected_div);
            }
            if(rook){
                selected_div.classList.add('rook');
                Rook(selected_div);
            }
            prevDiv.style.backgroundColor = '';
            selected_div.style.backgroundColor = "lightgreen";
            prevDiv = selected_div;
            return;
        }
    }
}

function select(){
    color = this.classList.contains('silver');
    Gcolor = this.classList.contains('gold');
    pawn = this.classList.contains('pawn');
    knight = this.classList.contains('knight');
    bishop = this.classList.contains('bishop');
    king = this.classList.contains('king');
    queen = this.classList.contains('queen');
    rook = this.classList.contains('rook');

    if(prevDiv === this){
        for(let i = 0 ; i < new_id.length ; i++)
            document.getElementById(new_id[i]).style.backgroundColor = '';
        new_id.splice(0, new_id.length);
        prevDiv.style.backgroundColor = '';
        prevDiv = null;
        return;
    }
    
    if(prevDiv != null){
        prev_color = prevDiv.classList.contains('silver');
        prev_Gcolor = prevDiv.classList.contains('gold');
        if((color && prev_color) || (Gcolor && prev_Gcolor)){
            prevDiv.style.backgroundColor = '';
            for(let i = 0 ; i < new_id.length ; i++)
                document.getElementById(new_id[i]).style.backgroundColor = '';
            new_id.splice(0, new_id.length);
            this.style.backgroundColor = "lightgreen";
            if(pawn) Pawn(this);
            if(knight) Knight(this);
            prevDiv = this;
        }

        else{
            prev_pawn = prevDiv.classList.contains('pawn'); 
            prev_king = prevDiv.classList.contains('king');
            prev_queen = prevDiv.classList.contains('queen');
            prev_bishop = prevDiv.classList.contains('bishop');
            prev_knight = prevDiv.classList.contains('knight');
            prev_rook = prevDiv.classList.contains('rook');

            if(prev_pawn || prev_bishop || prev_king || prev_queen || prev_rook || prev_knight){
                if(this.style.backgroundColor === 'lightgreen'){
                    selected_div = this;
                    Move();
                }
            }

            
        }

    }

    else{
        if((chance%2 == 0 && color) || (chance%2 != 0 && !color)){
            this.style.backgroundColor = "lightgreen";
            if(pawn) Pawn(this);
            if(knight) Knight(this);
            if(bishop) Bishop(this);
            if(king) King(this);
            if(queen) Queen(this);
            if(rook) Rook(this);
            prevDiv = this;
        }
    }
}


function Pawn(d){
    let coin = d.classList.contains('silver');
    let Gcoin = d.classList.contains('gold');
    let id = d.id.split('-');
    let x = parseInt(id[0]);
    let y = parseInt(id[1]);
    if(coin){
        if(x - 1 >= 0){
            let a = (x-1) + '-' + (y);
            if(!document.getElementById(a).style.backgroundImage) new_id.push(a);
        }
        if(x == 6){
            let a = (x-2) + '-' + (y);
            if(!document.getElementById(a).style.backgroundImage) new_id.push(a);
        }
        if(x - 1 >= 0 && y - 1 >= 0){
            let a = (x-1) + '-' + (y-1);
            if(document.getElementById(a).classList.contains('gold')) new_id.push(a);
        }
        if(x - 1 >= 0 && y + 1 < 8){
            let b = (x - 1) + '-' + (y + 1);
            if(document.getElementById(b).classList.contains('gold')) new_id.push(b);
        }
        for(let i = 0 ; i < new_id.length ; i++)
            document.getElementById(new_id[i]).style.backgroundColor = 'lightgreen';
    }
    if(Gcoin){
        if(x + 1 < 8){
            let a = (x+1) + '-' + (y);
            if(!document.getElementById(a).style.backgroundImage) new_id.push(a);
        }
        if(x == 1){
            let a = (x+2) + '-' + (y);
            if(!document.getElementById(a).style.backgroundImage) new_id.push(a);
        }
        if(x + 1 < 8 && y - 1 >= 0){
            let a = (x+1) + '-' + (y-1);
            if(document.getElementById(a).classList.contains('silver')) new_id.push(a);
        }
        if(x + 1 < 8 && y + 1 < 8){
            let b = (x + 1) + '-' + (y + 1);
            if(document.getElementById(b).classList.contains('silver')) new_id.push(b);
        }
        for(let i = 0 ; i < new_id.length ; i++)
            document.getElementById(new_id[i]).style.backgroundColor = 'lightgreen';
    }

}

function Knight(d){
    let coin = d.classList.contains('silver');
    let Gcoin = d.classList.contains('gold');
    let id = d.id.split('-');
    let x = parseInt(id[0]);
    let y = parseInt(id[1]);
    if(x-2 >= 0 && y-1 >= 0){
        let b = (x-2) + '-' + (y-1);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    if(x-2 >= 0 && y+1 < 8){
        let b = (x-2) + '-' + (y+1);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    if(x-1 >= 0 && y-2 >= 0){
        let b = (x-1) + '-' + (y-2);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    if(x-1 >= 0 && y+2 < 8){
        let b = (x-1) + '-' + (y+2);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    if(x+1 < 8 && y-2 >= 0){
        let b = (x+1) + '-' + (y-2);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    if(x+1 < 8 && y+2 < 8){
        let b = (x+1) + '-' + (y+2);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    if(x+2 < 8 && y-1 >= 0){
        let b = (x+2) + '-' + (y-1);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    if(x+2 < 8 && y+1 < 8){
        let b = (x+2) + '-' + (y+1);
        if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
        if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
    }
    for(let i = 0 ; i < new_id.length ; i++)
        document.getElementById(new_id[i]).style.backgroundColor = 'lightgreen';
}

function Rook(d){
    let coin = d.classList.contains('silver');
    let Gcoin = d.classList.contains('gold');
    let id = d.id.split('-');
    let x = parseInt(id[0]);
    let y = parseInt(id[1]);

    let i = 1;
    while(x - i >= 0){
        let b = (x-i) + '-' + y;
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(x + i < 8){
        let b = (x+i) + '-' + y;
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y - i >= 0){
        let b = (x) + '-' + (y-i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y + i < 8){
        let b = (x) + '-' + (y+i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }
    for(let i = 0 ; i < new_id.length ; i++)
        document.getElementById(new_id[i]).style.backgroundColor = 'lightgreen';
}

function Bishop(d){
    let coin = d.classList.contains('silver');
    let Gcoin = d.classList.contains('gold');
    let id = d.id.split('-');
    let x = parseInt(id[0]);
    let y = parseInt(id[1]);

    let i = 1;
    while(x - i >= 0 && y - i >= 0){
        let b = (x-i) + '-' + (y-i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(x + i < 8 && y + i < 8){
        let b = (x+i) + '-' + (y+i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y - i >= 0 && x + i < 8){
        let b = (x+i) + '-' + (y-i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y + i < 8 && x - i >= 0){
        let b = (x-i) + '-' + (y+i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }
    for(let i = 0 ; i < new_id.length ; i++)
        document.getElementById(new_id[i]).style.backgroundColor = 'lightgreen';

}

function Queen(d){
    let coin = d.classList.contains('silver');
    let Gcoin = d.classList.contains('gold');
    let id = d.id.split('-');
    let x = parseInt(id[0]);
    let y = parseInt(id[1]);

    let i = 1;
    while(x - i >= 0){
        let b = (x-i) + '-' + y;
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(x + i < 8){
        let b = (x+i) + '-' + y;
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y - i >= 0){
        let b = (x) + '-' + (y-i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y + i < 8){
        let b = (x) + '-' + (y+i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }


    i = 1;
    while(x - i >= 0 && y - i >= 0){
        let b = (x-i) + '-' + (y-i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(x + i < 8 && y + i < 8){
        let b = (x+i) + '-' + (y+i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y - i >= 0 && x + i < 8){
        let b = (x+i) + '-' + (y-i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }

    i = 1;
    while(y + i < 8 && x - i >= 0){
        let b = (x-i) + '-' + (y+i);
        if(coin && document.getElementById(b).classList.contains('gold')) new_id.push(b);
        if(Gcoin && document.getElementById(b).classList.contains('silver')) new_id.push(b);
        let image = document.getElementById(b).style.backgroundImage;
        if(image) break;
        new_id.push(b);
        i++;
    }
    for(let i = 0 ; i < new_id.length ; i++)
        document.getElementById(new_id[i]).style.backgroundColor = 'lightgreen';
}

function King(d){
    let coin = d.classList.contains('silver');
    let Gcoin = d.classList.contains('gold');
    let id = d.id.split('-');
    let x = parseInt(id[0]);
    let y = parseInt(id[1]);

    let dir = [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[-1,1],[1,-1]];
    for(let i = 0 ; i < 8 ; i++){
        if(x+dir[i][0] >= 0 && x+dir[i][0] < 8 && y+dir[i][1] >= 0 && y+dir[i][1] < 8){
            let b = (x+dir[i][0]) + '-' + (y+dir[i][1]);
            if(coin && !document.getElementById(b).classList.contains('silver')) new_id.push(b);
            if(Gcoin && !document.getElementById(b).classList.contains('gold')) new_id.push(b);
        }
    }
    
    for(let i = 0 ; i < new_id.length ; i++)
        document.getElementById(new_id[i]).style.backgroundColor = 'lightgreen';
}