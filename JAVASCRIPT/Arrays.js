//Array
let marks=[100,20,50,40,70,50];

console.log(marks);
console.log(marks.length);

let arr=[100,30,"rohit",true];
console.log(arr);
console.log(arr[1]);
console.log(typeof arr);//it is object
arr[1]=90;// to change the value
console.log(arr);

//push : to add the new element in the array
arr.push(200);
arr.push("strike");
console.log(arr);

// pop : to delete the element 
arr.pop();
console.log(arr);

//adding the element in the starting
arr.unshift("hi");
arr.unshift(50);
console.log(arr);

//to delete the first element 
arr.shift();
console.log(arr);

let array=[10,20,30,40,50];
for(let i=0;i<array.length ; i++){
    console.log(array[i]);
    
}

//second method:
for(let num of array){
    console.log(num);
    
}

let a = [1,5,10,4,7,6];
let arr2 = a; //copy by reference
arr2.push(20);
console.log(a);

//to point to another array with same variable
// const b = [10,20,30,40,50];
// b=[60,70,80];
// console.log(b);  it will give the error

//object(non primitive ): copy by reference 
//Primitive: Copy by value

// slice of an array
const d=[10,30,50,90,11];
console.log(d);
const e=d.slice(2,4);
console.log(e);

//to trim out using : splice
console.log(d.splice(1,3,"Nikhil",55)); // also insert the elements
console.log(d); // now the array will have only the elements which are not trim out

//spread operator
const w=[10,20,30,40,50];
const q=["Nikhil" , "Nilakshi", 11, true , " hello"];
//one method is that we can use the push method but its disadvantage is that it is inserted as  the array 
w.push(q);
console.log(w);
//the another method to add the two array into one
const arr4 = w.concat(q);
console.log(arr4);
//using the spread method
const arr5 = [...w,...q];
console.log(arr5); 


//join operator
const names = ["nilakshi", "alisha", "pari", "charlie", "rohit" , "mohit"];
// console.log(names.toString()); // conversion of array to string
console.log(names.join(" - "));

//searching
console.log(names.indexOf("nilakshi"));
//lastindex
console.log(names.lastIndexOf("nilashi"));
//include
console.log(names.includes("nilashi"));

//sorting
names.sort(); // sorting acc to the ascii value
console.log(names);

//reverse
names.reverse();
console.log(names);

const t=[101,90,80,32,91]; // comparing it as the string
t.sort();
console.log(t);

//want to sort the array on the basis of the number
const arr6 =[10,400,54,568,481];
arr6.sort((a,b)=>a-b); // it is the function.
console.log(arr6);

//subarray
const arr7=[10,30,50,[40,90,50,[4,5,6],11],80];
console.log(arr7);
console.log(arr7[3][0]);// access the element in the subarray

// flat the array
const y=arr7.flat();
console.log(y); // but it only flat  only one subarray.


















































