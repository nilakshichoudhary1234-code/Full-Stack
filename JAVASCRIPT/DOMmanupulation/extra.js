const arr = [1,5,-90,51,-55,88];
console.log(arr);

//arr.sort()
//console.log(arr);

const newarr=[...arr].sort();
console.log(newarr);

//ternary operator(?:)
// const isLoggedIN=false;
// const msg = isLoggedIN? "welcome back" : "Please Login";
// console.log(msg);

//short circuit (|| , &&)
// let isLoggedIN=false;
// console.log( isLoggedIN || "Please Login");

// isLoggedIN = true;
// console.log(isLoggedIN && "Welcome back");

// let isAdmin=true;
// console.log(isAdmin && 'Admin Panel')||(isLoggedIn && "user Dashboard");

//optional chaining (?.)
let user={
    name: "nilakshi",
    address:{
        city:"jammu",
    },
    mobile: 4050,
};
console.log(user.address.city);
console.log(user?.address?.city?.pincode?.area);

