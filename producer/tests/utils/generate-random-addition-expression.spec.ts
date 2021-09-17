import { generateRandomAdditionExpression } from "../../src/utils/intex";

describe('generateRandomAdditionExpression', () => {
  it('should generate a random addition expression', () => {
    const additionExpression = generateRandomAdditionExpression();

    expect(additionExpression).toBeString();
  });

  it('should generate a random addition expression with 3 numbers', () => {
    const withThreeNumbers = 3;

    const additionExpression = generateRandomAdditionExpression(withThreeNumbers);
    const splitedExpression = additionExpression.split('+');

    expect(additionExpression).toBeString();
    expect(splitedExpression).toHaveLength(3);
  });

  it('should generate a random addition expression without a equal sign', () => {
    const withTwoNumbers = 2;
    const withEqualSign = false;

    const additionExpression = generateRandomAdditionExpression(withTwoNumbers, withEqualSign);
    const lastCharacter = additionExpression[additionExpression.length -1];

    expect(additionExpression).toBeString();
    expect(lastCharacter).not.toBe('=');
  });
});
