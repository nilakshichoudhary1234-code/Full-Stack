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









