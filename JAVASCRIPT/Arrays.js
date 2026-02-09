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
let arr2 = a;
arr2.push(20);
console.log(a);
















