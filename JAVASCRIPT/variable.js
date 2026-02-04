//variables 

let name ="nilakshi";//in let we can change the value 
let age=19;
name="nikhil";

console.log(name , age);

const account = 5247;// in case of the const we cannot change the value 
//account = 23;

console.log(account);

//old method:
var a=10; // the disadvantage of var is that it can assign multiple values to the same variable at the same time.
var a=20;
console.log(a);


//about datatypes:
//primpitive datatype:number , string , boolean , undefined , null,bidigit,symbol
//number:
let b= 5;
let c=10;
console.log(b,c);
console.log(typeof a);


//string
let d="pari";
let e='javascript';
console.log(typeof d);
console.log(d,e);

//boolean
let login=true;
console.log(login);

//undefined
let user;
console.log(user);

//bigint
let num=1458731874n;
console.log(num);

//null
let weather = null;
console.log(weather);

//symbol
const id1=Symbol("id");
const id2=Symbol("id");
console.log(id1==id2);

//non primitive datatype: array , object , function 
//array: it is the object type.
let arr=[10,30,50,"nilli",false];
console.log(arr);

//object present in key value
let obj={
    name:"rohit",
    age:18,
    account : 47512,
    category: "general"

}
console.log(obj);

 let s=function add(){
    console.log("hello javascript");
    
}
//add();
//s();
console.log(s);

//primitivre datatype is immutable.
let n=10;
n=20;
console.log(a);

let str="mohit";
str="sohit";
console.log(str);















