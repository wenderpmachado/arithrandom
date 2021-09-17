/**
 * Compute a operation between two number considering the operator
 *
 * @param operator The operator
 * @param firstNumber
 * @param secondNumber
 * @returns number
 */
function compute(operator: string, firstNumber: number, secondNumber: number): number {
  let result = 0;

  switch (operator) {
    case '/':
      result = firstNumber / secondNumber;
      break;

    case '*':
      result = firstNumber * secondNumber;
      break;

    case '-':
      result = firstNumber - secondNumber;
      break;

    case '+':
    default:
      result = firstNumber + secondNumber;
      break;
  }

  return result;
}

export default compute;
