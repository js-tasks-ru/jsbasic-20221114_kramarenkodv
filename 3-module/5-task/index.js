function getMinMax(str) {
  let result = str.split(' ')
    .map(item => Number(item))
    .filter(item => Number.isFinite(item));
  let min = Math.min(...result);
  let max = Math.max(...result);

  return {min, max}
}
