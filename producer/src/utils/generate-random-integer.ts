/**
 * Generates a number between 0 and the number provided (max)
 *
 * @param max Highest possible value
 * @returns number
 */
function generateRandomInteger(max: number = 10): number {
  return Math.floor(Math.random() * max) + 1;
}

export default generateRandomInteger;
