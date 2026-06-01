let input=document.querySelector("input")
let btn=document.querySelector("button")
let list=document.getElementById("list")


input.addEventListener("input",()=>{

    if(input.value.trim()===""){
        list.innerHTML=""
    }

})


btn.addEventListener("click",()=>{
    let data=input.value
    
    fetch(`https://api.tvmaze.com/search/shows?q=${data}`).
    then((info)=>{
        return info.json()
        
    }).then((val)=>{
        console.log(val[0].show.image.original);
        show(val)
    })

})

function show(val){
        // let img=document.createElement("img")    

        for (let i of val) {
            let img=document.createElement("img")
            img.setAttribute("src",i.show.image.original)

            img.style.width="200px"
            img.style.height="300px"
            img.style.margin="10px"

            list.append(img)
        }

        // img.setAttribute("src",val[0].show.image.original)

        // list.appendChild(img)
    }