import { generateRandomInteger } from './intex';

/**
 * Generates a expression
 * @param amount Amount of numbers that is generated
 * @param withEqualSign If it will have the equal sign in the return string
 * @returns string
 */
function generateRandomAdditionExpression(amount: number = 2, withEqualSign: boolean = true): string {
    const positiveIntegers = new Array(amount).fill(0).map(() => generateRandomInteger());
    const expression = positiveIntegers.join('+');
    const finalExpression = !withEqualSign ? expression : `${expression}=`;

    return finalExpression;
}

export default generateRandomAdditionExpression;
