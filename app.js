/*const Numbers = [45,69,99,10,12,81,70,75,100,1597];
let text = "";
Numbers.forEach(nyFunction);
document.getElementById('semo').innerHTML= text;
function nyFunction(value,index,array){
text +=   index + "<br>" 
text +=   value + "<br>" 
text +=   array + "<br>" 
}*/

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);
document.getElementById('semo').innerHTML = numbers2;
function myFunction(index , array , value){
return value*3;
}


