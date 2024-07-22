/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */
// eslint-disable-next-line import/extensions
export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    // eslint-disable-next-line no-param-reassign
    array[idx] = appendString + idx;
  }

  return array;
}
