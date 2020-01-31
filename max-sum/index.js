function getMaxSum(list) {
  return Math.max(
    ...Object.values(
      list.reduce((map, num) => {
        const sum = String(num)
          .split("")
          .reduce((sum, num) => sum + Number(num), 0);
        map[sum] = (map[sum] || []).concat(num);
        return map;
      }, {})
    )
      .map(list => list.sort((a, b) => b - a))
      .map(([a = 0, b = 0]) => a + b)
  );
}

getMaxSum([42, 24, 31, 14])