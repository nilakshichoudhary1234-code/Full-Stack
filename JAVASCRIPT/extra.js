import { products } from "./products_100 (1).js"
//console.log(products);

// {
//     id: 1,
//     name: "Headphones",
//     price: 4535,
//     category: "electronics",
//     rating: 4.2,
//     qty: 2,
//   },

// const newProducts = products.map((p)=>{
//     const {name,price,category,qty} = p;
//     const xyz ={name,price,category,"total price ": price *qty};
//     return xyz;

// })
// const newProducts=products.map((p)=>{
//     let {price}=p;
//     price = price + (price*10)/100;
//     return {...p,price};
//     //return {...p,price:(p.price*10)/100+p.price};
// });
// console.log(newProducts);
const newProducts = products.filter((p)=>p.category === "food");
console.log(newProducts);

//total cart value
// const grandTotal=products.reduce((sum ,p)=>{
//     console.log(p.name,p.price,p.qty);
//     return sum+p.price*p.qty;
// }
// ); 
// console.log("total price: ",grandTotal);

//total quantity
const totalQuantity=products.reduce((sum,p)=>{
    return sum+p.qty;
    
});
console.log("totak quantity" , totalQuantity);





 


