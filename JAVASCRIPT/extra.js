//anything in curly brackets with key value pair is called object in js
const person={
    name:"nilakshi",
    age:19,
    email:"nilakshichoudhary1234@gmai.com",
    city:"jammu",
    isLogin:true,
    "last Login": "Dec31"
}

const check=(person)=>{
if(person.isLogin){
    const {name,email,city} = person;//object destructuring
    console.log(` welcome ${person.name} your last login last Login was ${person["last Login"]}`);//if any word consist of more than one word hence we do not use dot after person
}
else
    console.log(`${person.name} is logged out`);
}
check(person)
    

    
console.log(person);
console.log(person.name);  
console.log(`hello my name is ${person.name} I am ${person.age} years old`);
//using function
const printPerson =(p)=>{
    return `hello mr/mrs ${p.name},you are ${p.age} years old`
}
console.log(printPerson(person));




