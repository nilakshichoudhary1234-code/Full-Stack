//Number 
let a=10;
let b=345.6821;
console.log(b.toFixed(1));//it will show only one digit after the decimal.
console.log(typeof b.toFixed(1));//it returns the string not the number
console.log(b.toPrecision(5));//it will take 5 digit from the starting
console.log(b.toString());//will convert into the string.

let c = new Number(20);
let d= new Number(20);//to create the number as the object
console.log(c==d);

console.log(typeof c);//it will return the number as the object
//nonpremitive : comparison on reference bases 
//primitive :copy by value
let w=10;
let q=w;
console.log(w==q);


//use of Math library
console.log(Math.abs(-4));
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.ceil(6.3));//upper value
console.log(Math.floor(6.3));//lower value
console.log(Math.log10(20));
console.log(Math.random());//generate the random value between 0 and 1 , in which it excludes the 1

//to generate the game in which the randon number comes next from (0-9)

console.log(Math.floor(Math.random()*10));

//if same from(1-10)
console.log(Math.floor(Math.random()*10)+1);

//Math.floor(Math.random()*totalNumberofoutcome)+shift
//15-25 : console.log(Math.floor(Math.random()*11)+15)
//Math.floor(Math.random()*(max-min+1))+min

//OTP Generate of 4 digit : 1000-9999
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);














