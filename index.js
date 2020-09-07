function largestSubarraySum(array) {
  let sum = array.reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum;
}
