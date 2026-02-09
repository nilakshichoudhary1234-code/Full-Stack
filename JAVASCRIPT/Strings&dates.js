//String: ways to write

const str1 ="rohit"
const str2='nilakshi choudhary'
const day= "18feb"
const str3=`course is comg on ${day}`//using backtick: modern method
console.log(str1,str2,str3);
//advantage of backtick is that we can make the string in multiple strings
//srting is immutable so it always returns the new string

const str=`Hello Coder Army`;
console.log(str.length);
console.log(str[0]);//can access the element using the index in the string

//to convert it into the upper case : it has made the new string
console.log(str.toUpperCase());
//into lowercase
console.log(str.toLowerCase());
//to fing the index in the string
console.log(str.indexOf('Cod'));

//last index
const str4="Hello Coder Army Coder"
console.log(str4.lastIndexOf("Cod"));

console.log(str.includes('Cod'));


//extracting the string or slice
console.log(str.slice(2,7));//7 will not be included
console.log(str.slice(3));

//negative index
console.log(str.slice(-4));

//substring
console.log(str4.substring(2,5));

const a='Nilakshi'
const b='Choudhary'
const c=a+" "+b;
console.log(c);

console.log(24+'raman');
console.log(24+'raman'+100);

//replace
console.log(str.replace("ode",'iam'));

//trim
const user ="   hello  "
console.log(user.trim());//trim the space from the starting and ending

//split
const name="rohit, mohit, suraj , nikhil, akshita, adheesha "
console.log(name.split(","));//on the basis of comma 
const names= "Nilakshi Nikhil Sneha Akshita Adhessha"
console.log(names.split(" "));

//DATE
const now =new Date();
 //console.log(now); it is showing the UTC time
 console.log(now.toString());
 console.log(now.toISOString());
 console.log(now.toLocaleString());

 //to find out the day
console.log(now.getDay());//sunday = 0
console.log(now.getMonth());//month satry from 0 : january =0
console.log(now.getFullYear());
console.log(now.getHours());

//days : mon-tue(1based)
//month : 0 1

// year month date hour minute second millisecond 
// const n = new Date(2025,8,20,8,25,16,125);
// console.log(n.toString());

const n = Date.now();
const dates = new Date(0); // time in milisecond
console.log(dates.toString());

//1759272851288 : TimeStamp
//all the devices use UTC 





 
 

 

















