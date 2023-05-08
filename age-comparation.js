

// function ageDrinkCounter(age){
  // if (age <= 13){
  //   console.log("drink toddy")
  // }
  // else if (age <= 17) {
  //   console.log("drink coke")
  // }
  // else if (age <= 20) {
  //   console.log("drink beer")
  // }


  // else  {
  //   console.log("drink wisky")
  // }
// }
// ageDrinkCounter(266)

function ageDrink(age){
    switch (true) {
      case age <= 13:
        console.log("drink toddy")
        break;
        
        case age <= 17:
          console.log("drink coke")
          break;
    
          case age <= 20:
            console.log("drink beer")
            break;
    
      default:
        console.log("drink wisky")
        break;
    }
    }
    ageDrink(0)