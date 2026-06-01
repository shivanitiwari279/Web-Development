let scoreText = document.querySelector("#score")
let can=document.querySelector("canvas")
let snk=can.getContext("2d")

let snakecell=[[0,0]]
let cell=50
let direction="right"

let score=0

let GameOver=false
let foodcell=RandomFood()

let game=setInterval(() => {
    draw()
    update()
}, 300);

document.addEventListener("keydown",(e)=>{
    console.log(e);

    if (e.key=="ArrowUp") {
        direction="up"
    }

    else if (e.key=="ArrowDown") {
        direction="down"
    }

    else if (e.key=="ArrowRight") {
        direction="right"
    }

    else if (e.key=="ArrowLeft") {
        direction="left"
    }

})

function draw() {

       snk.clearRect(0,0,1000,500)

       snk.fillStyle="yellow"

       for (let a of snakecell) {
          snk.fillRect(a[0],a[1],cell,cell)
       }   
       
       snk.fillStyle="pink"
       snk.font="30px sans-serif"

       snk.fillStyle = "red"
       
       snk.fillRect(foodcell[0], foodcell[1], cell, cell)    
}

draw()

function RandomFood(){

   return[
     Math.floor(Math.random()*can.width/cell)*cell,
     Math.floor(Math.random()*can.height/cell)*cell
   ]

}

function update() {

       let headX=snakecell[snakecell.length-1][0]    
       let headY=snakecell[snakecell.length-1][1]
       
       let newX
       let newY

       if (direction=="left") {
        newX=headX-cell
        newY=headY
       }

       else if (direction=="right") {
        newX=headX+cell
        newY=headY
       }

       else if (direction=="down") {
        newX=headX
        newY=headY+cell
       }

       else  {
        newX=headX
        newY=headY-cell
       }
       
       if(newX < 0 || newY < 0 || newX == can.width || newY == can.height){

        clearInterval(game)

        snk.fillStyle="snow"
        snk.font="50px sans-serif"
        snk.fillText("Game Over☠️!!",350,250) 

        return
       }

       snakecell.push([newX,newY])
    
       if (newX == foodcell[0] && newY == foodcell[1]) {

       score++
       scoreText.innerText = `🟥 : ${score}`

       foodcell=RandomFood()

       } 
       
       else {

        snakecell.shift()

       }

}


