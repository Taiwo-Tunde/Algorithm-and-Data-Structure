

function evenAndOddCounter(number){
    let even = 0;
  
    for (var i = 0; i < number.length; i++){
      if (number[i] % 2 == 0){ 
      console.log(`Even number is ${  even += 1}`)
    }
    else{
      console.log("no even number")
    }
  }
    
  }
  
  console.log(evenAndOddCounter([1,3]))