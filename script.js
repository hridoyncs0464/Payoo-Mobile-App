
//  login btn functionality

document.getElementById("BtnLogin").addEventListener("click", function(e){
    //console.log("LogIn Btn  clisked");
     e.preventDefault();
//  Mobile Number and Pin number -
     const mobileNumber = 15840184870;
     const pinNumber = 1234;



     //  varifing phone number and pin number
     const MobileNumberValue = document.getElementById("MobileNumber").value;

     const MobileNumberValueConvertedToNumber = parseInt(MobileNumberValue);
     const PinNumberValue = document.getElementById("PinNumber").value;

     const PinNumberValueConvertedToNumber = parseInt(PinNumberValue);
    
      console.log(MobileNumberValueConvertedToNumber,PinNumberValueConvertedToNumber);
    if(MobileNumberValueConvertedToNumber === mobileNumber && PinNumberValueConvertedToNumber === pinNumber){
        // console.log(" log In successful ");
        window.location.href= "./home.html"
    }
    else {
        // console.log("invalid");
        alert("Invalid ");

    }



})
   
 

