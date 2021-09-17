import { computeExpression } from "../../src/compute/index";

describe('computeExpression', () => {
  it('should compute an addition expression (2+3=5)', () => {
    const expression = '2+3=';
    const expectedResult = 5;

    const result = computeExpression(expression);

    expect(result).toBeFinite();
    expect(result).toBe(expectedResult);
  });

  it('should compute an subtraction expression (2-3=-1)', () => {
    const expression = '2-3=';
    const expectedResult = -1;

    const result = computeExpression(expression);

    expect(result).toBeFinite();
    expect(result).toBe(expectedResult);
  });

  it('should compute an division expression (8/4=2)', () => {
    const expression = '8/4=';
    const expectedResult = 2;

    const result = computeExpression(expression);

    expect(result).toBeFinite();
    expect(result).toBe(expectedResult);
  });

  it('should compute an multiply expression (3*2=6)', () => {
    const expression = '3*2=';
    const expectedResult = 6;

    const result = computeExpression(expression);

    expect(result).toBeFinite();
    expect(result).toBe(expectedResult);
  });

  it('should compute a complex expression (3*2/2+1-2=6)', () => {
    const expression = '3*2/2+1-2=';
    const expectedResult = 2;

    const result = computeExpression(expression);

    expect(result).toBeFinite();
    expect(result).toBe(expectedResult);
  });
});
