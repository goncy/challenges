function removeTriplicates(str) {
  return str
    .split("")
    .reduce(
      (buffer, letter) =>
        buffer.slice(buffer.length - 2, Infinity) === letter + letter
          ? buffer
          : buffer.concat(letter),
      ""
    );
}

removeTriplicates("aaddaaa") // aaddaa