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
const arr = [10,20,30,5,90,87];
const newArr = arr.map((num)=>num*2);
console.log(newArr);

