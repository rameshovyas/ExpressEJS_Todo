module.exports = getDate;

function getDate(){
 let today = new Date();
 let dateOptions = {weekday:'long', year:'numeric', month:'long',day:'numeric'};
 let currentDay = today.getDay();
 let dow = today.toLocaleDateString("en-US",dateOptions); //weekday[currentDay];

 return dow;

}