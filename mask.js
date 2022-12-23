
//slice method can only work with a string or an array,
//  to avoid errors, first covert your number to string by calling split('') methof
function masked(number) {
    let sliced =   number.slice(0, -4)
    let replaced = sliced.replace(/./g, '*') + number.slice(-4);
    return replaced
  }
   console.log(masked('123456789'))