


let start=new Date(2021,0,30,13).getTime();
let time_now=new Date().getTime();
let total_seconds=Math.floor((time_now-start)/(1000));

setInterval("myFunction()",1000);


function myFunction(){

let temp=total_seconds++;

let days=Math.floor(temp/(24*60*60));
temp=temp%(24*60*60);
let hours=Math.floor(temp/(60*60));
temp=temp%(60*60);
let minutes=Math.floor(temp/(60));
temp=temp%(60);
let seconds=temp;


$("#d").text(('0' + days).slice(-2)); 
$("#h").text(('0' + hours).slice(-2)); 
$("#m").text(('0' + minutes).slice(-2)); 
$("#s").text(('0' + seconds).slice(-2));  	

}

