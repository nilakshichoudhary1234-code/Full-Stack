//to store the names in the array and show them using for each
// const n1=["nikhil","nilakshi","alish","rohit","mohit"]
// n1.forEach(n=>console.log(n))

// // square of the number
// const array=[1,2,3,4,5]
// array.forEach(n=>console.log(n*n))//forEach is used only to print any array , it will not return anything


// //map : it will return the array of all the element .
// const nums=[2,5,4,7,8]
// const newnums=nums.map((n=>n*n));
// console.log(nums);
// console.log(newnums);

// const newEven = nums.map((n)=>{ //curly brackets must include return keyword in map
//     if(n%2==0)
//         return n*n;
//     return n;
// })
// console.log(newEven);

// it will return selected items which satisfy on the given condition
const nums=[2,5,4,7,8]
 const larger = nums.filter((n)=>{
     if(n>=4)return n;

 });
console.log(larger);

//filter the even number
const allEvens = nums.filter((n)=>n%2===0);
console.log(allEvens);


//reduce:-

const total=nums.reduce((sum,n)=>{
    return n+sum;
});
console.log(total);

const sum = nums.reduce((sum,n)=>sum+n);
console.log(sum);









