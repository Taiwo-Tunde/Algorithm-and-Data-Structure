
// This is an algorithm for generating the multiples of 3 and 5 and add it together
//first initialize variables sum to be zero, then check for the condition, add tigether and return the result 
function multiple(int){
  
    let sum = 0;
  
    for(var i=0; i< int; i++){
      if (i % 3 === 0 ||  i % 5 === 0 ) 
      sum += i
     
     }
       return sum
  }
  
  console.log(multiple(10))