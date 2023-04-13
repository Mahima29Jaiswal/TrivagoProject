
let querry='jaipur'

let gmap=document.getElementById("gmap_canvas")
// gmap.src=`https://api.openweathermap.org/data/2.5/weather?q=${querry}&appid=c5f7cb74d66a1bd017f2be6cb3dde82f`
fetchData()
async function fetchData(){
    try{


        gmap.src=`https://maps.google.com/maps?q=${querry}=&output=embed`

       

    }catch(err){
        console.log(err);
    }
}
let baseprice=5600;
pricesfun()

function pricesfun(){
    let qty1=document.getElementById("a-addmore1").value
    let qty2=document.getElementById("a-addmore2").value

let beforeprice1=document.getElementById("beforeprice1")
let afterprice1=document.getElementById("afterprice1")
let beforeprice2=document.getElementById("beforeprice2")
let afterprice2=document.getElementById("afterprice2")
afterprice1.innerText=qty1*baseprice;
beforeprice1.innerText=qty1*afterprice1.innerText*1.5;



afterprice2.innerText=qty2*(baseprice/1+1000);
beforeprice2.innerText=qty2*(afterprice2.innerText*1.5);



}






// afterprice2.textContent=qty*afterprice1/1000*1000+1000;


