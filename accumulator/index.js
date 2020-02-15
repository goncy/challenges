const tests = [
  [[[1, 2, 3, 4], 10], false],
  [[[1, 2, 3, 4], 5], true],
  [[[1, 2, 3, 4], 8], false],
];

function match(nums, match) {
  return nums.reduce((acc, num) => acc === null ? null : num + acc === match ? null : num, 0) === null
}

tests.forEach(([args, result]) => {
  console.assert(match(...args) === result, 'Test failing')
})