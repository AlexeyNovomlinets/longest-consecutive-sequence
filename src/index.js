module.exports = function longestConsecutiveLength(array) {
  let hashTable = {},
      count = 1,
      countMax = 0;

  if (array.length === 0) return 0;
  if (array.length === 1) return 1;

  for (let i = 0, len = array.length; i < len; i++ ) {
    if(!hashTable[array[i]]) hashTable[array[i]] = 1;
  }

  for (let key in hashTable) {
    if (hashTable[(parseInt(key) + 1 )]) count++;
    else {
      if (count > countMax) countMax = count;
      count = 1;
    }
  }

  return countMax;
}
