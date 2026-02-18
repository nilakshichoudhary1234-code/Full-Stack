//forEach , filter , reduce , map , set
// const arr=[10,20,30,80,90]
// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);
    
// }
// )

// const arr2=[10,50,40,80];
// let sum=0;
// arr2.forEach ((number)=>
// {
//     sum+=number;
// })
// console.log(sum);

//filter
// const arr3 = [10,20,30,5,90,87];
// const newArr =arr3.filter((number)=>number>25);
// console.log(newArr);

// Array.prototype.filtering = function(compare){
    
//     const ans=[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }


// const newArr2=arr3.filtering((num)=>num>25);
// console.log(newArr2);

// const a=[80,30,15,31,42,70]
// const answer = a.filtering((num)=>num>25);
// console.log(answer);

//MAP:
// const arr = [10,20,30,5,90,87];
// const newArr = arr.map((num)=>num*2);
// console.log(newArr);

//reduce which provide the output as single value

//DATA STRUCTURE :
//SET :
// const arr = [10,20,30,25,15,10,20];
// console.log(arr);

// const s1 = new Set(arr); //in set it will give only unique value
// console.log(s1);
// s1.add(44);
// console.log(s1.has(23));//to check whether the array contain the element or not
// s1.delete(10);
// console.log(s1);
// console.log(s1.size);

// const email = ["nikhil@123","pari@234","krish@567","nikhil@123"]
// const s1=new Set(email);
// console.log(s1);
// //if we want the data in the same array format then
// const uniqueEmail=[...new Set(email)];
// console.log(uniqueEmail);
// //to print the value 
// const s2 =new Set(email);
// for(let num of s1){
//     console.log(num);  
// }


//MAP DATASTRUCTURE :
const m1=new Map([
    ["rohit",40],
    [5,"raman"],
    [true,11],
    [[10,20,30],"nilakshi"]
]);
//console.log(m1);
m1.set({name:"krish",age:50},false);
console.log(m1);
console.log(m1.has("rohit"));
console.log(m1.get("rohit"));//corresponding value to that key

for(let [keys,value] of m1){
    console.log(keys,value);
    
}










