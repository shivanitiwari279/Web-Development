// import data from './new.js'
// import {str2} from './new.js'
// console.log(data);
// console.log(str2);

// import {data,sum} from './new.js'
// sum(12,32)
// console.log(data);

// console.log("hello world");

// PURE FUNCTIONS

// function data(num) {
//     return num*2
// }
// console.log(data(3));
// console.log(data(3));


//IMPURE FUNCTIONS

// let count=0
// function data() {
//     count++
//     return count
// }
// console.log(data());
// console.log(data());

// function sum(a,b,c) {
//     return a+b+c
// }
// console.log(sum(5,6,7));

// function sum(b) {
//     return function(a){
//         return b+a
//     }
// }
// console.log(sum(7)(12));

// function sum(b) {
//     return function(a){
//         return function(c){
//               return b+a+c
//         }
//     }
// }
// console.log(sum(7)(12)(6));


// function sum(a) {
//     return function(b){
//         if(b){
//               return sum(a+b)
//         }
//         return a
//     }
// }
// console.log(sum(7)(12)(6)(3)(5)(13)());

//SPREAD OPERATORS

// let arr=[1,2,3,4]
// let arr1=[...arr,5,6,7]
// console.log(arr1);

//REST OPERATORS

// function sum(a,b,c,...num) {
//     console.log(a,b,c,num); 
// }
// console.log(sum(2,5,7,9,23,5,4,9,10));


// let arr=[1,2,3,4,5,6]
// let[a,b,c]=arr
// console.log(c);


// let obj={
//     id:123,
//     name:"Romil"
    
// }
// let{id,name}=obj
// console.log(id,name);


// console.log($("h1").text("js"));
// $("h1").css('color','green')


$("#fadeIn").click(()=>{
       console.log("fadeIn Done");
       $("#container").fadeOut()
})

$("#fadeOut").click(()=>{
       console.log("fadeOut Done");
       $("#container").fadeIn()
})

$("#fadeToggle").click(()=>{
       console.log("fadetaggle Done");
       $("#container").fadeToggle()
})