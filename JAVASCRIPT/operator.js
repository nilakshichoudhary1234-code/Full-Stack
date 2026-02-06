//operator 
//arithmetic operator
console.log(2+5);
console.log(2-5);
console.log(5*5);
console.log(6/2);
console.log(3%2);
console.log(5**3);

//assignment operator
let x=20;
let y=10;
x=x+y;
//x=x-y;
//x=x*y;
//x+=y;
console.log(x);

//comparison operator
let a=10;
let b=20;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a===b);

//difference between double and triple equals to
let w=50;
let q="50";//string
console.log(w==q);
console.log(w===q);// it also check the datatype

//if errror come not a number(NaN)
let r="40po";
let t=Number(r);
console.log(t);

//number to string
let g=10;
let h=String(g);
console.log( typeof h);

//boolean->number
let v = true;
console.log(Number(true));

console.log(Number(null));//null->0
console.log(Number(undefined));//undefined->NaN

console.log(String(true));
console.log( typeof String(true));

// conversion into boolean
console.log(Boolean(0));
console.log(Boolean("hello"));

//computr science challenge
let a1=0.1;
let b1=0.2;
let c1=a1+b1;
console.log(c1==0.3);

//1:null is loosely equal to undefined only 
console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null=="");
console.log(null==false);
console.log(null==true);

console.log(null>=0);
console.log(null<=0);
console.log(null>0);

//<,>,>=,<=(null-->number and undefined-->NaN)
console.log(null>=0);
console.log(null<=0);
console.log(null>0);
console.log(null<0);
console.log(null>=undefined);
console.log(undefined>=0);

//comparison between two strings
console.log("rohit">"mohit");//check the ascii value

//if we want to compare the the one type with the other .
//then we have to first convert the both the things into th number then we can compare them
console.log(null>"");

//console.log(NaN==NaN);

//working of loop
for(let i=0;i<=10;i++){
    console.log(i);    
}

//while loop

let j=1;
while(j<=10){
    console.log(j);
    j++;
}

//do wile
let k=1;
do{
    console.log(k);
    k++;
    
}while(k<10);

//if else condition 
let age=15;
if(age>=18){
    console.log("can vote");
    
}
else{
    console.log("cannot vote");
    
}


let personage=20;
if(personage<18){
    console.log("child");
    
}
else if(personage<60){
    console.log("young");
    
}
else{
    console.log("old");
    

}









































