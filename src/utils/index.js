export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// returns a random array with non-duplicated values from min to max
export function getRandomArray(min, max) {
  const array = new Array();
  while (array.length < 8) {
    const val = getRandomIntInclusive(min, max);
    if (!array.find(v => v ===val)) {
      array.push(val);
    }
  }
  return array;
}