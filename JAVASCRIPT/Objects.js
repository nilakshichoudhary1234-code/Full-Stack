//object
//key value
const user ={
    name:"nilakshi",
    age:20,
    email:"abc@gmail.com",
    account:3400
}

console.log(user);
console.log(typeof user);
console.log(user.age);
//CRUD : create read update delete
user.aadhar=541782;//to insert the new value.
//user.amount=777;//update the existing value
console.log(user);

//another way to access the value
console.log(user["name"]);

//copying the one onject to the other
const user2=user;
user2.age=80;
console.log(user);

//to get the keys 
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for (let keys in user){     //this for loop is less recommended
    console.log(keys,user[keys] );
}

//user.keys user["name"] user["age"]

//object destructuring
//const name=user.name;
//const age=user.age;
const {name:userName,age:userAge}=user;
console.log(userName,userAge);

//can also destructure the array
const arr=[10,20,30,40,50];
const [first,second]=arr;
console.log(first,second);

//for of loop in array
const temnparr=Object.keys(user);
console.log(temnparr);

for(let keys of temnparr){ //for(let keys of Object.keys(user)) if do not want to make temnparr
    console.log(keys);
}

//to access the values using for of
for(let values of Object.values(user)){
    console.log(values);
    
}
console.log(Object.entries(user));

for(let [keys,values] of Object.entries(user)){
    console.log(keys,values);
    
}

const u = {
    name: "raman",
    age: 40,
    emailId:"xyz@gmail.com",
    amount:500,
    greeting: function(){
        console.log( `holi is coming soon, ${this.name} will have holidays`);//this points the same function
        return 20;
        
    }
}
//u.greeting();
const va=u.greeting();
console.log(va);

//nested object
const person={
    name:"nikhil",
    age:21,
    amount:485137155,
    email:"nik1234@gmail.com",
    address:{
        city:"kathua",
        state:"jammu and kashmir"
    }
}
console.log(person);
console.log(person.address);
console.log(person.address.city);

// //shallow copy
// const person2={...person};
// person.name="alisha";
// person.address.city="jammu";
// console.log(person);


//deep copy
const person2=structuredClone(person);
person2.address.city="jammu";
console.log(person);

//key : string or symbol
const sym=Symbol("id");
const info={
    name:"rohit",
    age:50,
    0:100,
    2:"mohit",
    [sym]:"hello"

}
console.log(info);
console.log(info.name);
console.log(info["0"]);
console.log(info[sym]);






















