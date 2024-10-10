function isPalindrome (str) {
    const lowerWord = str.toLowerCase().replace(/\s/g, '');
    const word = lowerWord.split('');
    const wordReverse = lowerWord.split('').reverse();
    
    for (let i = 0; i <= word.length; i ++) {
      if(word[i] == wordReverse[i]) {
        i++
      } else
      return false
    }
  
  return true
  }

function arrayMaxMin(arr){
  let smallestNumber = arr[0];
  let biggestNumber = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < smallestNumber) {
    smallestNumber = arr[i];
    } 

    if(arr[i] > biggestNumber) {
      biggestNumber = arr[i];
    }
  }

  return [smallestNumber, biggestNumber];
}

console.log(arrayMaxMin([2,30,33,11,51,56]))
