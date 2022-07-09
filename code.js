

// 1) Sum Zero

// let array = []
// let array = [1]
// let array = [1, 2, 3]
// let array = [1, 2, 3, -1]
let array = [10, -10]


let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        value = true;
      } 
    }
  }
}
// console.log(value)


/////////////////////////////////////////////

// 2) Unique Cahracters


function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }

// console.log(hasUniqueChars("Iconoclastic"))
// console.log(hasUniqueChars("Monday"))
// console.log(hasUniqueChars("Tuesday"))


/////////////////////////////////////////////


// 3) Pangram Sentences

function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

//   console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
//   console.log(isPangram("I like cats, but not mice"))


/////////////////////////////////////////////


// 4) Pangram Sentence

len = ["Hello", "University", "Presidential"]

function findLongestWord(arr) {
    let len = 0
    for (let i = 0; i < arr.length; i++) {
      if( arr[i].length > len) {
        len = arr[i].length
      }
    }
    return len
  }

//   console.log(findLongestWord(len))