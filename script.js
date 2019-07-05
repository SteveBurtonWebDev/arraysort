function splitArray(arr) {
  let numberArray = [];
  let stringArray = [];
  let numberAndStringArray = [];
  for (item of arr) {
    if (typeof item == 'number') {
      numberArray.push(item);
    } else {
      stringArray.push(item);
    }
  }
  numberAndStringArray.push(numberArray);
  numberAndStringArray.push(stringArray);
  return numberAndStringArray;
};

function sortArray(arr) {
  arr.sort((a,b) => a - b);
  let finishedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      finishedArray.push(arr[i]);
    } else {
        let tempArray = [];
        do {
          tempArray.push(arr[i]);
          i++;
        }
        while (arr[i] == arr[i-1]);
        finishedArray.push(tempArray)
        i--;
    }
  }
    return finishedArray;
}


let numberStringArray = splitArray([1,2,"5",4,591,"2",392, "1",391,2,5,10,2,"2",1, "1",1,1,20,"1",20,"20","2"]);
let sortedNumbers = sortArray(numberStringArray[0]);
let sortedStrings = sortArray(numberStringArray[1]);
let finalArray = sortedNumbers.concat(sortedStrings);
console.log(finalArray);
