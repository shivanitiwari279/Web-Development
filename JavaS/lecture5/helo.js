// let h1=document.querySelector("h1") 
// let p=document.createElement("p")
// p.innerText="java script"
// h1.append(p)
// h1.remove(P)
// console.log(h1);

// console.log(h1.innerText);
// h1.innerText="JS"
let bt=document.querySelector("button")
let inp=document.querySelector("input")
let h1=document.querySelector("h1")

bt.addEventListener("click",()=>{
    console.log(inp.value);
    h1.innerText+="\n" + inp.value
    inp.value=""

    
})

// setInterval(() => {                      //It means it will run in loop after given interval 
//     console.log("Java");
    
// }, 3000);

setTimeout(() => {                   //It means it will run only at once after given interval 
    console.log("Script");
    
}, 3000);