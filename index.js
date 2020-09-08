function largestSubarraySum(array) {
  let largestSum = 0;

  for (let i = 0; i < array.length; i++) {
    // iterates over each integer element
    let sumFixedStart = 0; // declares a variables
    for (let j = i; j < array.length; j++) {
      sumFixedStart += array[j];
      largestSum = Math.max(largestSum, sumFixedStart);
    }
  }

  return largestSum;
}
