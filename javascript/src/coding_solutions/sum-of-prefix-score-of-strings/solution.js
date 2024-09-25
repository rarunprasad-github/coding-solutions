class TrieNode {
  constructor(value, counter) {
    this.value = value;
    this.counter = counter;
    this.children = new Array(26);
  }
};

var getIndexForCharacter = function(char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
};

var sumPrefixScores = function(words) {
  const root = new TrieNode(null, 0);

  for (let word of words) {
    let temp = root;
    for (let i = 0; i < word.length; i++) {
      const currentCharacter = word[i];
      const currentCharacterIndex = getIndexForCharacter(word[i]);
      if (temp[currentCharacterIndex] == undefined) {
        temp.children[currentCharacterIndex] = new TrieNode(currentCharacter, 1)
      } else {
        temp.children[currentCharacterIndex].counter++;
      }
      temp = temp.children[currentCharacterIndex];
    }
  }

  let result = [];

  for (let word of words) {
    let temp = root;
    let counter = 0;
    for (let i = 0; i < word.length; i++) {
      const currentCharacter = word[i];
      const currentCharacterIndex = getIndexForCharacter(currentCharacter);
      counter += temp.children[currentCharacterIndex].counter;
      temp = temp.children[currentCharacterIndex];
    }
    result.push(counter);
  }

  return result;
};