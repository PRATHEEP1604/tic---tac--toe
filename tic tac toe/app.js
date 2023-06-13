const gameBoard = document.querySelector(".gameboard");
const player = document.querySelector("#player");
let info = document.querySelector(".info");
let units =[
    "","","",
    "","","",
    "","",""
];
let start = 'circle';
player.textContent='circle'
function createBoard()
{
    units.forEach((element,i)=>
    {
        const square = document.createElement('div');
        square.classList.add("square");
        const symbol = document.createElement('div');
        symbol.classList.add("symbol-index",i);
        square.append(symbol);
        square.classList.add("square-id",i);
        gameBoard.append(square);
        square.addEventListener('click',add);
        
    })
    
};
createBoard();
function add(e)
{
    let symbol =  document.createElement('div');
    symbol = e.target.firstChild;
    if(start==="circle")
    {
        symbol.innerHTML = circleElement;
        symbol.classList.add('circle');
        start = 'cross';
        player.textContent = 'cross';
    }
    else
    {
        symbol.innerHTML = crossElement;
        symbol.classList.add('cross');
        start = 'circle';
        player.textContent = 'circle';
    }
    
    console.log(e.target.firstChild);
    e.target.removeEventListener('click',add);
    calculate();
}

function calculate()
{
    const allsquares = document.querySelectorAll(".square");
    
    let winConditions =[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[6,4,2]
    ]
    winConditions.forEach(array=>{
       const circlewins= array.every(cell=>
          allsquares[cell].firstChild?.classList.contains('circle')
        )
        if(circlewins)
        {
        info.innerHTML = "circle wins"

        allsquares.forEach(element=>
            {
                element.removeEventListener('click',add)
            })
            setTimeout(removechild,3000);
         }
    })
    winConditions.forEach(array=>{
       const crosswins = array.every(cell=>
            allsquares[cell].firstChild?.classList.contains('cross')
        )
        if(crosswins){
            info.innerHTML = "cross wins";
            allsquares.forEach(element=>
                {
                    element.removeEventListener('click',add)
                })
            setTimeout(removechild,3000);
        }
    })
    
    
}
function removechild()
{
    location.reload();
}