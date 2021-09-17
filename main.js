findLongestWord = (arr) => {
  let sum = 0;
  let longest = arr.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });
  console.log(longest);
  sum = longest.length;
  console.log(sum)
};

findLongestWord(["cats", "elephant", "pig"]);

hasUniqueChars = (str) => {
    let obj = {}
    for(let i = 0; i < str.length; i++){
        let ch = str[i]
        if(obj[ch]) return false
        obj[ch] = true
    }
    return true
}


console.log(hasUniqueChars("Monday"))