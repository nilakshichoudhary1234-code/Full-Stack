// function handleClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is coming";

// }

//id="first" onclick="handleClick()" -- on h1 in html file.
// document.getElementById("first");
// Element.onclick = function handleClick(){
//     Element.textContent = "Strike is coming soon";

// }  // this is not used because when we want to more than one click on the same then it will skip the indermediate one.

// const element =document.getElementById("first");
// element.addEventListener('mouseenter',()=>{
//     element.textContent="Strike is coming";
    
// })

// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "i am clicked";
// })    // if we want same on every child so we will select its parent div

// const parent = document.getElementById("parent");
// console.log(parent.children);

// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }

// const parent = document.getElementById("parent");
// console.log(parent.children);

// for (let child of parent.children) {
//     console.log(child);
//     child.addEventListener('click', () => {
//         child.textContent = " I am Clicked";
//     })
// }

const grandparent = document.getElementById("grandparent");
grandparent.addEventListener('click', () => {
    console.log("Grandparent is clicked");
},true)

const parent = document.getElementById("parent");
grandparent.addEventListener("click", () => {
  console.log("parent is clicked");
},true);


const child = document.getElementById("child");
grandparent.addEventListener("click", () => {
  console.log("child is clicked");
},true);

//capture phase on hai : top se down aaoge : us time pe event ko trigger kar diya jayega
//capture phase off hai : event hai unko down to up(bubbling phase bolte hai,tab trigger karajayega)






