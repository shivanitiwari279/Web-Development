let input=document.querySelector("input")
let btn=document.querySelector("button")
let list=document.getElementById("list")


input.addEventListener("input",()=>{

    if(input.value.trim()===""){
        list.innerHTML=""
    }

})


btn.addEventListener("click",()=>{

    let apiK='9f6290d6cda9a36a63755fadee71f83d'

    let city=input.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiK}&units=metric`)
    
    .then((res)=>{
        return res.json()
    })

    .then((data)=>{

        console.log(data)

        list.innerHTML=`
        
        <h2>${data.name}</h2>
        <h3>Temp: ${data.main.temp} °C</h3>
        <h3>Weather: ${data.weather[0].main}</h3>
        
        `
    })

})