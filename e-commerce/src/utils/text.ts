/**
 * Function capitalize the first letter of a string
 * @param string - Text: 'hello world'
 * @returns - Text: 'Hello world'
 */
export const capitalizeFirstLetter = (string = '') =>
  string.charAt(0).toUpperCase() + string.slice(1);

/**
 * Function format text
 *
 * @param {string} string - Text: 'hello-world'
 * @param {string} sliptCharacter - The character user want to take for slipt
 * @returns {string} - Update case first letter of the sentence and add a space between words
 */
export const addSpaceAndCapitalizeFirstLetter = (string: string, sliptCharacter = '-') => {
  const words = string.split(sliptCharacter);
  const result = words.map((word) => capitalizeFirstLetter(word || '')).join(' ');
  return result;
};
