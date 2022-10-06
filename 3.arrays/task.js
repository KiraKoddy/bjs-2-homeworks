function compareArrays(arr1, arr2) {
  return arr1.lenght === arr2.lenght && arr2.every((value, index) => value === arr1[index])
}

function advancedFilter(arr) {
  return arr.filter(item => item > 0).filter(item => item % 3 == 0).map(item => item * 10);
}
