interface SplitedExpression {
  operations: string[];
  numbers: number[];
}

/**
 * Split the expression into arrays divided into operations and numbers
 * @param expression The arithmetic expression
 * @returns SplitedExpression
 */
function splitExpression(expression: string): SplitedExpression {
  const operations = expression.split(/\d/).slice(1);
  const numbers = expression.split(/\D/).slice(0, -1).map(Number);

  return {
    operations,
    numbers
  };
}

export default splitExpression;
