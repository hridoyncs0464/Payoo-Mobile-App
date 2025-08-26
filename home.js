


// adding money



document.getElementById("BtnAddMoney").addEventListener("click", function(e){
  e.preventDefault();
    // console.log("BtnAddMoney clicked");

   const bankName = document.getElementById("bank").value;
   const accountNumber = document.getElementById("AccountNum").value;
   const amountadd = parseInt(document.getElementById("addAmount").value);
   const pin = document.getElementById("PinNumber").value;
     
 
   const amountAdd = parseInt(document.getElementById("addAmount").value);
//console.log(bankName,accountNumber,amountadd,pin);

const AvailableBalence = parseInt(document.getElementById("availableBalence").innerText);

//console.log(AvailableBalence);  
const totalAvailableBalence = amountAdd + AvailableBalence;
document.getElementById("availableBalence").innerText = totalAvailableBalence;


    
})