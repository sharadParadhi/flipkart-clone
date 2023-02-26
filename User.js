let container=document.getElementById("tbody")
let logout=document.getElementById("logout")

let userObj={
    name:"sharad",
    lastName:"paradhi",
    emailId:"sharad@gmail.com",
    contact:"7276912579",
    city:"saphale"
}

console.log("hii")

let arr=[]
arr.push(userObj)
localStorage.setItem("userdata",JSON.stringify(arr))

let userdata=JSON.parse(localStorage.getItem("userdata"))
console.log(userdata)

renderCardList(userdata)

function renderCardList(cardData) {
    let cardList = `
      <div class="card-list">
        ${cardData
          .map((item) =>
            getCard(
              item.name,
              item.lastName,
              item.emailId,
              item.contact,
              item.city,
            )
          )
          .join("")}
      </div>
    `;
    container.innerHTML = cardList;
  }
  
      function getCard(id,brand,title,rating,price){
          let cart= 
          `<tr>
              <td>${id}</td>
              <td>${brand}</td>
              <td>${title}</td>
              <td>${rating}</td>
              <td>${price}</td>
          </tr>`
            
          return cart
      }


     
     logout.addEventListener("click",()=>{
        console.log("hii")
        alert("logout Successfull")
        window.location.href="./index.html"
     })