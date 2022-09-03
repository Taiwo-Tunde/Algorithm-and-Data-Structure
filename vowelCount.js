
// This function takes in string and return the numbber of vowels inside that string
function vowelCount(str){
  // the split methods takes in the string and covert it to an array, the map method loop over the array, the callback function 
  //takes the looped array and compares it with vowel sound 'aeiou'
    let vowel = str.split('').map( str => str == 'aeiou')
   // vowel.length returns the numbers of vowel in the input string
    return vowel.length
 }
 
 console.log(vowelCount('tundE'))