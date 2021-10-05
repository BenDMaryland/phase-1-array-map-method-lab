const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let result = tutorials.map(cap)

function cap(string){
let firstletter = string.slice(0,1).toUpperCase();
let restWord = string.slice(1);
let y = firstletter + restWord
  return y
}



function splitToString(array){
let string = array.join("**")
console.log(string)
let array2 = string.split(" ")
console.log(array2)
let results = array2.map(cap)
results =  results.join(" ")
results = results.split ("**")
results = results.map(cap)
return results
}


console.log(splitToString(tutorials))



// let namer = ["tom is here","bob is her", "billy eats bi"]

// // function gamer (array){
// //   let string = array.join()
// //  string = string.split(" ")
// //  return string
// //  }


// // let apple = gamer(namer)
// // console.log(apple)


// // function maper (array){
// //   let result = array.map(elem => gamer(array))
// //    // result = result.join(" ")
// //    return result
// // }
// // console.log(maper(gamer(apple)))





// // function titleCase(array) {
// //   let str =  JSON.stringify(array)

// //   return str.split(' ').map(function(word) {
// //     return (word.charAt(0).toUpperCase() + word.slice(1));
// //   }).join(' ');
  
// // }
// // function titleCased(array){
// //   let array2 = titleCase(array)

// //   return array2.split("?")
// // }

// // console.log(titleCased(tutorials))



// // const titleCased = () => {
// //   return tutorials
// // }



// // function splitToString(arr){
// //  let string = arr.join()
// // string = string.split(" ")
// // return string
// // }

// // function cap(string){
// // let firstletter = string.slice(0,1).toUpperCase();
// // let restWord = string.slice(1);
// // let y = firstletter + restWord
// //   return y
// // }

// // function annoy(array){
// //  let word = splitToString(array)
// //  console.log(word)
// //  let word2 = word.map(function cap(string){
// //   let firstletter = string.slice(0,1).toUpperCase();
// //   let restWord = string.slice(1);
// //   let y = firstletter + restWord
// //     return y
    
// //   })
 
// // return word2
// // }

// // function rebind(array){
// //   const array2 = array.split(",");
// //   return array2
// // }

// //  console.log(annoy(namer))



// // //console.log(namer.map(cap))

