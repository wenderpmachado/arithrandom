import compute from "./compute";
import splitExpression from "./compute-addition";

/**
 * Computes an (string) expression completely
 * @param expression The expressiong
 * @returns number
 */
function computeExpression(expression: string): number {
  const { numbers, operations } = splitExpression(expression);
  let computedValue = numbers.shift() as number;

    for (let i = 0; i < numbers.length; i++) {
        const sign = operations[i];
        const currentNumber = numbers[i];

        computedValue = compute(sign, computedValue, currentNumber);
    }

    return computedValue;
}

export default computeExpression;
