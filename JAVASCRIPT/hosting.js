//execution context 
//memeory allocation 
//a=undefined then 10
//b=undefined then 20
//addNumber = fnCode
//sumResult1=undefined
//sumResult2=undefined

//execution phase


console.log(a);// it will show undefined

var a= 10;
var b= 20;

// var sumResult1 = addNumber(a,b);
// console.log(sumResult1);   // it will run the code 

function addNumber(num1,num2){
    var sum = num1+num2;
    return sum;

}
var sumResult1 = addNumber(a,b);
var sumResult2 = addNumber(4,5);
console.log(sumResult1,sumResult2);
console.log(a);


//let const 
//memory allocation
//a = <uninitialised> (temporal dead zone)
//b = <uninitialised> (temporal dead zone)
//execution phase

//console.log(c);
let c=50;
const d=60;

const addition =function(num3,num4){
    const sum2=num3+num4;
    return sum2;


}
console.log(c);
const result = addition(c,d);
console.log(result);

//Hosting : hosting is javascript behavior of knowing about a variable or function existence before executing the code.
// How it treat that knowledge depends on the keyword(function,var,let, or const).

