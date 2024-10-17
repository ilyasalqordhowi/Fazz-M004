function resetArray(nums, n) {
  let result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
}

let nums = [2, 5, 1, 3, 4, 7];
let n = 3;

let output = resetArray(nums, n);
console.log(output);
