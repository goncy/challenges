function getHighestLetter(string) {
  return string.split("")
    .reduce(
        (max, letter, _, list) =>
        (letter.charCodeAt(0) <= 90 &&
            list.includes(letter.toLowerCase()) &&
            letter.localeCompare(max) === 1) ?
        letter : max, "")
}

getHighestLetter("aaBabcDaAzZ") // B