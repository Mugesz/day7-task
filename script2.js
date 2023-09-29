print countrier under asia
var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v2/all"); 
request.send();
request.onload = function() {
    var result = JSON.parse(request.response)

         var answer = result.filter((ele)=>ele.region==="Asia")
         console.log(answer);
   };
///////////////////////////////////////////////////////////////////////////////////


countries with population less than 2lakh


var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v2/all"); 
request.send();
request.onload = function() {
    var result = JSON.parse(request.response)
   
      var answer =  result.filter((ele)=>ele.population<200000)
      console.log(answer);
         }
////////////////////////////////////////////////////////////////////////////////////

print name capital flag

var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v2/all"); 
request.send();
request.onload = function() {
    var result = JSON.parse(request.response)
         result.forEach(ele=>{
            console.log(ele.name);
            console.log(ele.capital);
            console.log(ele.flag)
         })
   };

/////////////////////////////////////////////////////////////////////////////////////////
total no population 

var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v2/all"); 
request.send();
request.onload = function() {
    var result = JSON.parse(request.response)
         var answer = result.reduce((acc,ele)=>acc+ele.population)
         console.log(answer)
   };

/////////////////////////////////////////////////////////////////////////////////////

countries used USD dollar


var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v2/all"); 
request.send();
request.onload = function() {
   var res=JSON.parse(request.response);
   var currency = res.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
     
   };
//////////////////////////////////////////////////////////////////////////////////////////

   
