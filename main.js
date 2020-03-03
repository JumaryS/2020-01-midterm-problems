/******************
 * YOUR CODE HERE *
 ******************/



function fizzBuzzSingleNumber(str, num){

  for(let i=0; i< str.length;i++){

    if(num % 3 === 0 && num % 5 === 0){
      return "FizzBuzz"
    }if (num % 3 === 0 && str % 5 !== 0){
      return "Fizz" 
    } if(num % 5 === 0){
      return "Buzz"
    }
      
    }return str

    
    }
  

    function getMiddleLetters(word){
    let middle = ''
    for (let i=0; i<word.length; i++){
      return Math.round((middle.length -1 /2))
    }return word
    }

    function getNextLetter(letter){
      let alphabet ='abcdefghijklmnopqrstuvwxzy'

      for( let i = 0; i<letter.length; i ++){
        if (letter[i].length === alphabet){
        return
        }
      }return letter
    }


    function getAverage(average){
    let x=[]
      for(let i=0; average.length>i; i++){
        Math.round(x.length)

      }return average
    } 


    function triStateAreaOnly(states){

      let towns=[]

      if(states === "CT"|| states ==="NY" || states === "NJ"){
        return towns
      }
      
    }




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
