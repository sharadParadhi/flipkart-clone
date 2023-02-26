

let totalprice= JSON.parse(localStorage.getItem("totalprice"));
console.log(totalprice)
let nemail = JSON.parse(localStorage.getItem("nameemailshow"));


let name = document.querySelector(".nameadress");

let phone = document.querySelector(".phoneadress");
let pincode = document.querySelector(".pincodeaddress");


let locality = document.querySelector(".localityadress");
let totaladdress = document.querySelector(".adresstrextall");
let city = document.querySelector(".cityadress");
let state = document.querySelector(".selecttag");

let displayname = document.querySelector(".displaynameadress");
let displayadress = document.querySelector(".displaytextareaadress")
let displaylocality = document.querySelector(".displaylocalityadress")
let displaycity = document.querySelector(".displaycityadress")
let displaystate = document.querySelector(".displaystateadress")
let displaypincode = document.querySelector(".displaypincodeadress")


document.querySelector(".displayname").textContent= nemail[0].name;
document.querySelector(".displayemail").textContent= nemail[0].email;

let form = document.querySelector("form");
let obj={};
form.addEventListener("submit", (e)=>{
   e.preventDefault()
   
    obj={
        name : name.value,
        phone : phone.value,
        pincode : pincode.value,
        locality : locality.value,
        address : totaladdress.value,
        city : city.value,
        state : state.value,

    }
    console.log(obj);

    document.querySelector(".address").classList.add("active")
     
    displayname.textContent = `${obj.name}`
    displayadress.textContent = `${obj.address},`
    displaylocality.textContent = `${obj.locality},`
    displaycity.textContent =` ${obj.city},`
    displaystate.textContent = `${obj.state}-`
    displaypincode.textContent = `${obj.pincode}`
   document.querySelector(".adressdetailshow").classList.add("active")

   document.querySelector(".textpaymentdetailsh").classList.add("active")

   document.querySelector(".payementoptions").classList.add("hello")

   
});

let card = document.getElementById("clickcard");

card.addEventListener("submit",(e)=>{
    e.preventDefault()
    document.querySelector(".cred").classList.add("active")
   document.querySelector(".popupcrdeit").classList.add("active")
})

document.querySelector(".submitbtn").addEventListener("click",()=>{
   
    window.location.href="./ordersuceesful.html"
});

document.querySelector(".showamount").textContent = Math.ceil(Math.random()*10000) ;


document.querySelector(".totpr").textContent= totalprice;

document.querySelector(".totpr2").textContent= totalprice;
document.querySelector(".totpr3").textContent= totalprice;

console.log(totalprice)