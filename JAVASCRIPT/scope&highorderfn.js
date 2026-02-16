//scope and closure , HOF 
//1. global scope : accesible to everyone 
//2. functional scope : accesible only to that function
//3. block level scope : accesible only to that block

let a=10;
const b=20;


if(true){
    console.log(b);
    // var e=155;
    
}
 //console.log(e);// var is accesible outside the brackets

function greet(){
    let c =30;
    console.log(a);
     var e=155;
    
}
//console.log(e); // but var is not accesible outside the function
greet();

let global =30;
function greets(){
    let global=40;
    console.log(global);
    
}
greets();

//when the global is output then first check in inner level , then outer level ..

function work(){
    let global=80;
    function meet(){
        console.log(global);
        
    }
    meet();
}
greets();

function createCounter(){
    function increment(){
        console.log("i am increment function");
    }
   return increment;
   //return increment();
}
const count = createCounter();
console.log(count);
count();
