document.querySelector("#search-form").addEventListener("submit", async function(event){
event.preventDefault();

const query = document.querySelector("#search-input").value

 const url = `https://youtube-v3-alternative.p.rapidapi.com/search?query=${query}cat&geo=US&lang=en`;

 const options = {
  method: "GET",
  headers:{
    "x-rapidapi-key":"b0606d1e26msh74bc8c4cf4dee61p1b01d9jsn040c51f4bb19",
    "x-rapidapi-host": "youtube-v3-alternative.p.rapidapi.com"
  }
 }
 try{


 }catch(error){
  
 }

})