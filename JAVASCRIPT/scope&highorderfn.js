//scope and closure , HOF 
//1. global scope : accesible to everyone 
//2. functional scope : accesible only to that function
//3. block level scope : accesible only to that block

// let a=10;
// const b=20;


// if(true){
//     console.log(b);
//     // var e=155;
    
// }
//  //console.log(e);// var is accesible outside the brackets

// function greet(){
//     let c =30;
//     console.log(a);
//      var e=155;
    
// }
// //console.log(e); // but var is not accesible outside the function
// greet();

// let global =30;
// function greets(){
//     let global=40;
//     console.log(global);
    
// }
// greets();

// //when the global is output then first check in inner level , then outer level ..

// function work(){
//     let global=80;
//     function meet(){
//         console.log(global);
        
//     }
//     meet();
// }
// greets();

// function createCounter(){
//     let count =0;
//     function increment(){
//        // console.log("i am increment function");
//        count++;
//        return count;

//     }
//    return increment;
//    //return increment();
// }
// const counter = createCounter();
// //console.log(count);
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// let user2={
//     balance: 500,
//     deposit: function(amount){
//         if(typeof amount ==="number"&&amount>0){
//             this.balance+=amount;
//             return this.balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && this.balance>=amount){
//             this.balance+=amount;
//             return this.balance;
//         }
//     },
//     getBalance: function(){
//         return this.balance;
//     }

// }
// user2.balance="nilakshi"
// console.log(user2.deposit(200));

function createBankAccount(){
    let balance =500;

    const user ={
        deposit: function(amount){
            if(typeof amount==="number"&& amount>0){
                balance+=amount;
                return balance;
            }
        },
        withdraw: function(amount){
            if(typeof amount==="number"&& amount>0 && balance>=amount){
                balance-=amount;
                return balance;
            }
        },
        getBalance: function(){
            return balance;
        }
    }
    return user;
}

const customer = createBankAccount();
console.log(customer.deposit(200));


//Higher order function : the function which return the another function.

// function double(){
//      return function execute(){
//         console.log("hello");
        
//     }
// }
// const n =double();
// n();

function double(value){
     return function execute(num){
        return num*value;
        
    }
}
const n =double(20);
console.log(n(5));


