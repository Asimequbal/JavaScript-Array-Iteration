const Numbers = [45,69,99,10,12,81,70,75,100,1597];
let text = "";
Numbers.forEach(nyFunction);
document.getElementById('semo').innerHTML= text;
function nyFunction(value,index,array){
text +=   index + "<br>" 
text +=   value + "<br>" 
text +=   array + "<br>" 
}