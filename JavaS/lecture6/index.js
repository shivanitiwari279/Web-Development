
let box = document.querySelectorAll(".box")
let resetbt=document.querySelector("#reset")
let msgBox=  document.querySelector("h2")
let win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6],[2,5,8]]
    let turn0 = true

    for (let a of box) {

      a.addEventListener("click", () => {

        if (turn0) {

          a.innerText = "O"
          turn0 = false
          a.disabled=true
        }

        else {

          a.innerText = "X"
          turn0 = true
          a.disabled=true
        }
          checkWinner()
      })

    }
    function checkWinner(){
        for (let pattern of win) {
            let X=box[pattern[0]].innerText
            let Y=box[pattern[1]].innerText
            let Z=box[pattern[2]].innerText
            if (X != "" && Y != "" && Z != "") {

            if (X == Y && Y == Z) {

                msgBox.innerText = `${X} WON!`

            }

        }
        }
    }