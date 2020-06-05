const longestWord = (phrase) => {
  const arrayFromPhrase = phrase.split(' ');
  let longestWordFromString = arrayFromPhrase[0];
  for (let index = 0; index < arrayFromPhrase.length; index++) {
    if (longestWordFromString.length < arrayFromPhrase[index].length) {
      longestWordFromString = arrayFromPhrase[index];
    }
  }
  return longestWordFromString;
};
console.log(
  longestWord(
    'Antônio foi no banheiro e não sabemos ololololololo que aconteceu'
  )
);
