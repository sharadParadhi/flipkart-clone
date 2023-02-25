

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

