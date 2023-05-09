

function downwardCounter(number){
 
    let newNumber =[];
    for  ( let i = 1; i <= number; i++ ) {
      
  newNumber.push(i)
      
    }
    return newNumber
  }
  console.log(downwardCounter(10))
  // output (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]