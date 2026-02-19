const newElement = document.createElement("h2");
newElement.textContent = " strike is coming ";
newElement.id="second";


//select element 
const element=document.getElementById("first");
element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = " diwali  is coming soon ";
newElement2.id="third";
// newElement2.className = "diwali"; // class name
// newElement2.className += "holi"; //can give more than one class name
newElement2.classList.add("diwali");
newElement2.classList.add("holi");

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize="50px";
newElement2.setAttribute("hello","ji");

element.before(newElement2);



console.log(newElement2.getAttribute("class"));

//before after
// const list=document.createElement("li");
// list.textContent="milk";
// const list2=document.createElement("li");
// list2.textContent="cake";
// const list3=document.createElement("li");
// list3.textContent="bake";

// const list4=document.createElement("li");
// list4.textContent="food";

// const unorderElement = document.getElementById("listing");
// unorderElement.append(list,list2);
// unorderElement.prepend(list3);
// unorderElement.children[1].after(list4);

const arr =["milk","cake","bake","food"];
const unorderElement = document.getElementById("listing");
for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food ;
    
}
