var total= 0;
function buybtn(data){

    var x=data.parentNode.childNodes[1].innerText;
    var y = parseInt(data.parentNode.childNodes[3].innerText.split(" ")[0])
 
    var z= document.getElementById("item-list");
    var a=document.createElement('p')
    a.innerText=x;
    z.appendChild(a);

    var k= document.getElementById("TP")
    total = total+y;
    k.innerText = total;

    var btnPurchase = document.getElementById("purchase") ;
    if(total>0){
    btnPurchase.removeAttribute('disabled')
    }
    else{
       btnPurchase.setAttribute('disabled',true)
    }
   
    var applyBtn = document.getElementById("apply");

    if(total>=200){
        applyBtn.removeAttribute('disabled')
    }
    else{
        applyBtn.setAttribute('disabled',true)
    }
 }

function applyBtnFunc(data){
    var couponValue = document.getElementById("CouponCode").value;
   var i = document.getElementById("disCount")
   var ii =document.getElementById("PriceAfterDisc")
    if(couponValue==="SELL200"){
        var appendDisc = parseInt(total*.2);
        var appendTotal = parseInt(total - appendDisc);
    
    i.innerText=appendDisc;
ii.innerText=appendTotal
   

       
    }
}