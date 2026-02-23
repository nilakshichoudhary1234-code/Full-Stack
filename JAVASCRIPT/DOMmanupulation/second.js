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

const parent = document.getElementById("parent");
console.log(parent.children);

for(let child of parent.children){
    console.log(child);
    child.addEventListener('click',()=>{
        child.textContent = "I am Clicked";
    })
}





