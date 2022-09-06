

function squareNumber(number){
let  numToArray  = number.toString()
    
let result = [];
for (i = 0; i < numToArray.length; i++){
    result[i] = numToArray[i] * numToArray[i];
}  

console.log(squareNumber(23456))