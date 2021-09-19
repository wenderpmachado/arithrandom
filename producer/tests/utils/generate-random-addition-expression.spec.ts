import { generateRandomAdditionEquation } from "../../src/utils/intex";

describe('generateRandomAdditionEquation', () => {
  it('should generate a random addition equation', () => {
    const additionEquation = generateRandomAdditionEquation();

    expect(additionEquation).toBeString();
  });

  it('should generate a random addition equation with 3 numbers', () => {
    const withThreeNumbers = 3;

    const additionEquation = generateRandomAdditionEquation(withThreeNumbers);
    const splitedEquation = additionEquation.split('+');

    expect(additionEquation).toBeString();
    expect(splitedEquation).toHaveLength(3);
  });

  it('should generate a random addition equation without a equal sign', () => {
    const withTwoNumbers = 2;
    const withEqualSign = false;

    const additionEquation = generateRandomAdditionEquation(withTwoNumbers, withEqualSign);
    const lastCharacter = additionEquation[additionEquation.length -1];

    expect(additionEquation).toBeString();
    expect(lastCharacter).not.toBe('=');
  });
});
