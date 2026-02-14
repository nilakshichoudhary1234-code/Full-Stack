//function
function greeting(){
    console.log("hello function world");
    
}
greeting();

//add two no using function
function addnumber(a,b){
    const sum=a+b;
    console.log(sum);
    
}
addnumber(5,4);
addnumber(5,8,5);// will take only first two argument
addnumber(5);//NaN

//rest operator : it can take any number of argument
function add(...num){
    let sum = 0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
    
}
add(2,4);
add(2,4,5,7);
add(8,5,7,4,1,2,9,6);
add(5,4,7,7);

//spread operator: 
const arr=[10,20,30,40,50];
const [first,second,...num]=arr;
console.log(first,second,num);

const a1=[10,20,30,40,50];
const a2=[60,70,80];
const ans=[...a1,...a2];
console.log(ans);


//second method to make function : expression
const addition = function(n1,n2){
    return n1+n2;
}
console.log(addition(3,4));

//arrow function :  ()=>{ }
const function1 =()=>{
    console.log("hello ");  
}
function1();

// const additionnum = (c,d)=>{
//     return c+d;

// }
// console.log(additionnum(8,4));


const additionnum =(c,d)=>c+d;
console.log(additionnum(8,4));

//if we have single parameter , no need of this ()
const squareNumber= num => num*num;
console.log(squareNumber(8));

// const greet = () =>{
//     return{
//         name : "rohit",
//         age : 50,
//     }
// }
//or


const greet =()=>({name:"rohit",age:50});
console.log(greet());

//IIFE FUNCTION
(function greet2(){
    console.log("this is the IIFE function");
    
})();

(()=>{
    console.log("hi");
    
})();


function greet3(){
    console.log("hello ! , how are you");
}
function dance(){
    console.log("i am dancing");
    
}
function meet(callback){
    console.log("i am going to meet someone ");
    callback();
    console.log("i have finished meeting");
    
    
}
//meet(greet3());// first it will execute the greet3 function
//meet(greet3);//first it will execute meet function and then greet function
meet(greet);
meet(dance);

function blinkkitOredrPlaced(){
    console.log("we have started paking your food");
    
}
function zomatoOredrPlaced(){
    console.log("We have started preparing your food");
    
}
function payment(amount,callback){
    console.log(`${amount} payment has been initilized`);
    console.log("Payment is received");
    callback();
   
   
}
payment(1000,zomatoOredrPlaced);
payment(500,blinkkitOredrPlaced);



























