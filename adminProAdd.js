// Accesing All The elements From Html
const baseurl="https://636f63f1bb9cf402c81694bd.mockapi.io/starproduct";

// add product
let brand=document.getElementById("brand");
let title=document.getElementById("title");
let category=document.getElementById("category");
let description=document.getElementById("description");
let price=document.getElementById("price");
let rating=document.getElementById("rating");
let thumbnail=document.getElementById("thumbnail");
let stock=document.getElementById("stock")
let images=document.getElementById("images")
let discountPercentage=document.getElementById("discountPercentage")


// update product
let id=document.getElementById("id")


// buttons
let AddButton=document.getElementById("Add");
let UpdateButton=document.getElementById("Update");

let logout=document.getElementById("logout")







// Getting Number of Products
fetch(`${baseurl}`)
    .then(res=>res.json())
    .then(data=>{
       
        console.log(data)
    })




// adding the Product to API

AddButton.addEventListener("click",()=>{
    let obj={
        brand:brand.value,
        description:description.value,
        price:price.value,
        thumbnail:thumbnail.value,
        title:title.value,
        rating:rating.value,
        category:category.value,
        stock:stock.value,
        images:images.value,
        discountPercentage:discountPercentage.value
    };
    console.log(obj)
      
      createEmployee(obj)    

      function createEmployee(userObj) {
        fetch(`${baseurl}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userObj),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data);
          });
      }
})


// Getting the Product from API

// GetButton.addEventListener("click",()=>{
//     let obj={
//         id:Id.value
//     };
    
//     fetch(`${baseurl}/men/${obj.id}`)
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//         brand.value=data.brand;
//         Name.value=data.name;
//         Desc.value=data.description;
//         Price.value=data.price;
//         rating.value=data.rating;
//         img.value=data.src.img;
//         updateimage.src=data.img;
//         showbrand.innerText=data.brand;
//         showname.innerText=data.name;
//         showdesc.innerText=data.description;
//         showprice.innerText=data.price;

//     })


// })



// // Updating The Product From API

UpdateButton.addEventListener("click",()=>{
    let obj={
       id:id.value,
        brand:brand.value,
        description:description.value,
        price:price.value,
        thumbnail:thumbnail.value,
        title:title.value,
        rating:rating.value,
        category:category.value,
        stock:stock.value,
        images:images.value,
        discountPercentage:discountPercentage.value
    };
    console.log(obj)
    
    dispaly(obj)

    async function dispaly(obj){
       try{
        let res=await fetch(`https://636f63f1bb9cf402c81694bd.mockapi.io/starproduct/${obj.id}`,{
            method:"PATCH",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        })
        console.log(res)
        if(res.ok==true){
            let data=await res.json()
            console.log(data)
            
            
        }
       }catch(error){
            console.log("error")
       }
    }


})




//logout
logout.addEventListener("click",()=>{
    console.log("hii")
    alert("logout Successfull")
    window.location.href="./index.html"
 })


