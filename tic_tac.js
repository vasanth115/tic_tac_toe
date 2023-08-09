let start=document.getElementById("start");

        start.addEventListener("click",play);

        function play()
        {
            let startgame=document.getElementById("startgame");
            startgame.style.display="none";
            let small=document.getElementById("small");
            small.style.display="grid";
        }

let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let btn4=document.getElementById("btn4");
let btn5=document.getElementById("btn5");
let btn6=document.getElementById("btn6");
let btn7=document.getElementById("btn7");
let btn8=document.getElementById("btn8");
let btn9=document.getElementById("btn9");
let k=1;

btn1.addEventListener("click",game1);
btn2.addEventListener("click",game2);
btn3.addEventListener("click",game3);
btn4.addEventListener("click",game4);
btn5.addEventListener("click",game5);
btn6.addEventListener("click",game6);
btn7.addEventListener("click",game7);
btn8.addEventListener("click",game8);
btn9.addEventListener("click",game9);

function game1()
{
    if(k%2==0)
    {
    btn1.innerHTML="X";
    btn1.style.fontSize="80px";
    btn1.style.textAlign="center";
    btn1.style.color="blue";
    }
    else
    {
        btn1.innerHTML="O";
        btn1.style.fontSize="80px";
        btn1.style.textAlign="center";
        btn1.style.color="red";
    }
    gamewin();
    btn1.removeEventListener("click",game1);
    k++;
}
function game2()
{
    if(k%2==0)
    {
    btn2.innerHTML="X";
    btn2.style.fontSize="80px";
    btn2.style.textAlign="center";
    btn2.style.color="blue";
    }
    else
    {
        btn2.innerHTML="O";
        btn2.style.fontSize="80px";
        btn2.style.textAlign="center";
        btn2.style.color="red";
    }
    gamewin();
    btn2.removeEventListener("click",game2);
    k++;
}
function game3()
{
    if(k%2==0)
    {
    btn3.innerHTML="X";
    btn3.style.fontSize="80px";
    btn3.style.textAlign="center";
    btn3.style.color="blue";
    }
    else
    {
        btn3.innerHTML="O";
        btn3.style.fontSize="80px";
        btn3.style.textAlign="center";
        btn3.style.color="red";
    }
    gamewin();
    btn3.removeEventListener("click",game3);
    k++;
}

function game4()
{
    if(k%2==0)
    {
    btn4.innerHTML="X";
    btn4.style.fontSize="80px";
    btn4.style.textAlign="center";
    btn4.style.color="blue";
    }
    else
    {
        btn4.innerHTML="O";
        btn4.style.fontSize="80px";
        btn4.style.textAlign="center";
        btn4.style.color="red";
    }
    gamewin();
    btn4.removeEventListener("click",game4);
    k++;
}

function game5()
{
    if(k%2==0)
    {
    btn5.innerHTML="X";
    btn5.style.fontSize="80px";
    btn5.style.textAlign="center";
    btn5.style.color="blue";
    }
    else
    {
        btn5.innerHTML="O";
        btn5.style.fontSize="80px";
        btn5.style.textAlign="center";
        btn5.style.color="red";
    }
    gamewin();
    btn5.removeEventListener("click",game5);
    k++;
}

function game6()
{
    if(k%2==0)
    {
    btn6.innerHTML="X";
    btn6.style.fontSize="80px";
    btn6.style.textAlign="center";
    btn6.style.color="blue";
    }
    else
    {
        btn6.innerHTML="O";
        btn6.style.fontSize="80px";
        btn6.style.textAlign="center";
        btn6.style.color="red";
    }
    gamewin();
    btn6.removeEventListener("click",game6);
    k++;
}

function game7()
{
    if(k%2==0)
    {
    btn7.innerHTML="X";
    btn7.style.fontSize="80px";
    btn7.style.textAlign="center";
    btn7.style.color="blue";
    }
    else
    {
        btn7.innerHTML="O";
        btn7.style.fontSize="80px";
        btn7.style.textAlign="center";
        btn7.style.color="red";
    }
    gamewin();
    btn7.removeEventListener("click",game7);
    k++;
}

function game8()
{
    if(k%2==0)
    {
    btn8.innerHTML="X";
    btn8.style.fontSize="80px";
    btn8.style.textAlign="center";
    btn8.style.color="blue";
    }
    else
    {
        btn8.innerHTML="O";
        btn8.style.fontSize="80px";
        btn8.style.textAlign="center";
        btn8.style.color="red";
    }
    gamewin();
    btn8.removeEventListener("click",game8);
    k++;
}

function game9()
{
    if(k%2==0)
    {
    btn9.innerHTML="X";
    btn9.style.fontSize="80px";
    btn9.style.textAlign="center";
    btn9.style.color="blue";
    }
    else
    {
        btn9.innerHTML="O";
        btn9.style.fontSize="80px";
        btn9.style.textAlign="center";
        btn9.style.color="red";
    }
    gamewin();
    btn9.removeEventListener("click",game9);
    k++;
}

function gamewin()
{
    let result=document.getElementById("result");
    let playagain=document.getElementById("playagain");
    let show=document.getElementById("show");
    if(btn1.innerHTML=='X'&&btn2.innerHTML=='X'&&btn3.innerHTML=='X')
    {
       result.style.display="block";
       result.innerHTML=" X wins";
       small.style.display="none";
       show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn1.innerHTML=='O'&&btn2.innerHTML=='O'&&btn3.innerHTML=='O')
    {
       result.style.display="block";
       result.innerHTML=" O wins";
       small.style.display="none";
       show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn4.innerHTML=='X'&&btn5.innerHTML=='X'&&btn6.innerHTML=='X')
    {
        result.style.display="block";
       result.innerHTML=" X wins";
       small.style.display="none";
       show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn4.innerHTML=='O'&&btn5.innerHTML=='O'&&btn6.innerHTML=='O')
    {
       result.style.display="block";
       result.innerHTML=" O wins";
       small.style.display="none";
       show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn7.innerHTML=='X'&&btn8.innerHTML=='X'&&btn9.innerHTML=='X')
    {
        result.style.display="block";
        result.innerHTML=" X wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn7.innerHTML=='O'&&btn8.innerHTML=='O'&&btn9.innerHTML=='O')
    {
        result.style.display="block";
        result.innerHTML=" O wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }


    else if(btn1.innerHTML=='X'&&btn4.innerHTML=='X'&&btn7.innerHTML=='X')
    {
        result.style.display="block";
        result.innerHTML=" X wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn1.innerHTML=='O'&&btn4.innerHTML=='O'&&btn7.innerHTML=='O')
    {
        result.style.display="block";
        result.innerHTML=" O wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }

    else if(btn2.innerHTML=='X'&&btn5.innerHTML=='X'&&btn8.innerHTML=='X')
    {
        result.style.display="block";
        result.innerHTML=" X wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn2.innerHTML=='O'&&btn5.innerHTML=='O'&&btn8.innerHTML=='O')
    {
        result.style.display="block";
        result.innerHTML=" O wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }

    else if(btn3.innerHTML=='X'&&btn6.innerHTML=='X'&&btn9.innerHTML=='X')
    {
        result.style.display="block";
        result.innerHTML=" X wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn3.innerHTML=='O'&&btn6.innerHTML=='O'&&btn9.innerHTML=='O')
    {
        result.style.display="block";
        result.innerHTML=" O wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }

    else if(btn1.innerHTML=='X'&&btn5.innerHTML=='X'&&btn9.innerHTML=='X')
    {
        result.style.display="block";
        result.innerHTML=" X wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn1.innerHTML=='O'&&btn5.innerHTML=='O'&&btn9.innerHTML=='O')
    {
        result.style.display="block";
        result.innerHTML=" O wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }

    else if(btn3.innerHTML=='X'&&btn5.innerHTML=='X'&&btn7.innerHTML=='X')
    {
        result.style.display="block";
        result.innerHTML=" X wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
    else if(btn3.innerHTML=='O'&&btn5.innerHTML=='O'&&btn7.innerHTML=='O')
    {
        result.style.display="block";
        result.innerHTML=" O wins";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })

    }
    else if(btn1.innerHTML!=""&&btn2.innerHTML!=""&&btn3.innerHTML!=""&&btn4.innerHTML!=""&&btn5.innerHTML!=""&&btn6.innerHTML!=""&&btn7.innerHTML!=""&&btn8.innerHTML!=""&&btn1.innerHTML!="")
    {
        result.style.display="block";
        result.innerHTML="TIE";
        small.style.display="none";
        show.style.display="flex";
        playagain.addEventListener("click",()=>{
            location.reload();
        })
    }
}
