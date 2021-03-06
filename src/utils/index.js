export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// returns a random array with non-duplicated values from min to max
export function getRandomArray(min, max) {
  const array = [];
  const arrayMaxLength = max - min + 1;
  while (array.length < arrayMaxLength) {
    const val = getRandomIntInclusive(min, max);
    if (!array.find(v => v === val)) {
      array.push(val);
    }
  }
  return array;
}

export function checkIfTileClose([rowA, colA], [rowB, colB]) {
  if ( (rowA === rowB && (Math.abs(colA - colB) === 1)) || (colA === colB && (Math.abs(rowA - rowB) === 1)) ) {
    return true;
  } else {
    return false;
  }
}
