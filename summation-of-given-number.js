
// This is an algorithm that finds the summation of every number from 1 to the given number.
function summing (num){
    let sum = 0;
    for (let i = 0; i <= num; i++){
      sum += i
    
    }
    return sum
  }
  
  console.log(summing(100))