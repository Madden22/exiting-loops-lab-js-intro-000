function breakOut(arr, chVal, stVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === stVal) {
      break
    }
    arr[i] = chVal
  }
  return arr
}

function keepGoing(arr, chVal, skVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === stVal) {
      continue
    }
    arr[i] = chVal
  }
  return arr
}

function findBy(arr, findFn) {

}
