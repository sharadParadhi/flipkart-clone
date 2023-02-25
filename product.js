
let Products=document.getElementById("Products")


window.addEventListener("load",()=>{
  dispaly()
  console.log("work")
})


    async function dispaly(){
       try{
        let res=await fetch(`https://636f63f1bb9cf402c81694bd.mockapi.io/starproduct`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify()
        })
        console.log(res)
        if(res.ok==true){
            let data=await res.json()
            console.log(data)
            
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
            item.brand,
            item.title,
            item.rating,
            item.price,
            item.thumbnail,
          )
        )
        .join("")}
    </div>
  `;
  Products.innerHTML = cardList;
}

    function getCard(id,brand,title,rating,price,image){
        let cart= 
        `<tr>
            <td>${id}</td>
            <td>${brand}</td>
            <td>${title}</td>
            <td>${rating}</td>
            <td>${price}</td>
            <td><img src=${image} alt=img></td> 
        </tr>`
          
        return cart
    }
    
    function onclick(){
        console.log("hello")
    }
    
    let logout=document.getElementById("logout")
     logout.addEventListener("click",()=>{
        console.log("hii")
        alert("logout Successfull")
        window.location.href="adminHome.html"
     })