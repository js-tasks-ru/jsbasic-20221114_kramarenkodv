function filterRange(arr, a, b) {
  let arrAfter = arr.filter(item => (item >= a && item <= b));
  return arrAfter;
}
