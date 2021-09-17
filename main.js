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
