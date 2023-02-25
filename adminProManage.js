let Products=document.getElementById("Products")

let baseurl="https://636f63f1bb9cf402c81694bd.mockapi.io/starproduct"

let logout=document.getElementById("logout")


let fetchdata=[]

dispaly()

    async function dispaly(){
       try{
        let res=await fetch(`https://636f63f1bb9cf402c81694bd.mockapi.io/starproduct`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
            bosdy:JSON.stringify
        })
        console.log(res)
        if(res.ok==true){
            let data=await res.json()
            console.log(data)
            fetchdata=data
            
            renderCardList(fetchdata)
        }
       }catch(error){
            console.log(error)
       }
    }

    

  

// Creating Dom

function renderCardList(Data){

    // Creating elements For Each Products
    Products.innerText=null

    Data.forEach(function(product,name){
        let div=document.createElement("tr");
        let ID=document.createElement("td");
        ID.innerText=product.id;
        let Brand=document.createElement("td");
        Brand.innerText=product.brand;
        let Name=document.createElement("td");
        Name.innerText=product.title;
        let ProductType=document.createElement("td");
        ProductType.innerText=product.rating;
        let Price=document.createElement("td");
        Price.innerText=product.price;
        let Imagetd=document.createElement("td");
        let delbtn=document.createElement("button");
        delbtn.innerText="Delete"


        // Deleting function onclicking
        Imagetd.addEventListener("click",()=>{

            console.log(product.id);

            fetch(`${baseurl}/${product.id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
        
            })
            .then((res)=>{
                return res.json
            })
            .then((data)=>{
              console.log(data)
               alert("Product Deleted Succesfully")
               window.location.reload()
              
            })
            .catch((error)=>{
                console.log(error)
            })
        })


        // Appending Created Elements
        Imagetd.append(delbtn);
        div.append(ID,Brand,Name,ProductType,Price,Imagetd);
        Products.append(div);

    })
    
  }

  
     logout.addEventListener("click",()=>{
        console.log("hii")
        alert("logout Successfull")
        window.location.href="adminHome.html"
     })