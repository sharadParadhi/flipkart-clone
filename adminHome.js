let container=document.getElementById("container") 
let totalProduct=document.getElementById("totalProducts")

let logout=document.getElementById("logout")


console.log("hii")


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
            totalProduct.innerText=data.length
            renderCardList(data)
        }
       }catch(error){
            console.log(error)
       }
    }

    function renderCardList(cardData) {
  let cardList = `
    <div class="card-list">
      ${cardData
        .map((item) =>
          getCard(
            item.id,
            item.thumbnail,
            item.title,
            item.description,
            item.price,
            item.rating,
          )
        )
        .join("")}
    </div>
  `;
  container.innerHTML = cardList;
}

    function getCard(id,image,title,desc,price,rating){
        let cart= 
        `<div id=cart>
            <div id=${id}>
            <img src=${image} alt="image">
            </div>
            <p>id ${id}</p>
            <div>
                <p>${title}</p>
                
                <p>Price ${price} <span class="fa fa star">${rating}</span></p>
            </div>

            <div class="btn">
                <button class="btn edit" id="editbtn" >Edit</button>
                <button class="btn del" id="delbtn">Delete</button>
             </div>
        </div>`
          
        return cart
    }
    
    
    
    //logout
     logout.addEventListener("click",()=>{
        console.log("hii")
        alert("logout Successfull")
        window.location.href="./index.html"
     })