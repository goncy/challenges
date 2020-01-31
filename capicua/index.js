function isCapicua(num) {
  return String(num) === String(num).split("").reverse().join("");
}

isCapicua(12321) // true