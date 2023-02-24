let Products=document.getElementById("Products")



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
           <td><button>Delete</button></td>
           
        </tr>`

        return cart
    }
    
    