// This is a function return divisors of any given positive integer. except 1 and the number itself.
function divisors(integer){
    //i initiate empty array to hold the divisors 
       let divisors = [];
       for ( i = 2; i < integer; i++){
           if ( integer % i === 0){
               divisors.push(i)
           }
       }   
       if (divisors.length === 0){
           return integer + ' ' + 'is a prime Number'
       }
           return divisors
       }
       
       console.log(divisors(12))