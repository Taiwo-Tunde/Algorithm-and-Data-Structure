

// this function find the middle letter of any given string
function middleLetter(str) {

  
      return str.substr(Math.ceil(str.length / 2 - 1), str.length % 2 === 0 ? 2 : 1)
      
    }
    
    console.log(middleLetter('tunde'))