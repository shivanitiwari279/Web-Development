// localStorage.setItem("user","rahul")
// let data=localStorage.getItem("user")
// // localStorage.removeItem("user")
// console.log(data);



let h1=document.querySelector("h1")
let h2=document.querySelector("h2")
let h3=document.querySelector("h3")
let btn=document.querySelector("button")
console.log(btn,"btn");
btn.addEventListener("click",(e)=>{
     console.log("removed");
     
     localStorage.removeItem("data")
})



let data=JSON.parse(localStorage.getItem("data"))
console.log(data,"data");

if (data) {
    h1.innerText=data.name
    h2.innerText=data.email
    h3.innerText=data.pass
} 


let form=document.querySelector("#SignUpF")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(form[0].value);
    console.log(form[1].value);
    console.log(form[2].value);

    let userdata={
        name:form[0].value,
        email:form[1].value,
        pass:form[2].value
    }

    localStorage.setItem('data',JSON.stringify(userdata))
    
})


let loginF=document.querySelector("#logindata")
loginF.addEventListener("submit",(e)=>{
    e.preventDefault()
    let lgsavedata=JSON.parse(localStorage.getItem("data"))
    console.log(lgsavedata);
    let loginInputD={
        email:loginF[1].value,
        pass:loginF[2].value
    
}
    
if (loginInputD.email===lgsavedata.email && loginInputD.pass===lgsavedata.pass) {
    alert("login donee")
} 
else {
    alert("login fail")
}

})