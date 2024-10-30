import { describe, expect, test } from 'vitest'
import { filterWords } from '../js/filterWords';

describe('filterWords function', () => {
  test('should remove duplicate words from the string', () => {
    const text = "Uno mas dos es tres trEs uNo dos";
    const result = filterWords(text);
    expect(result).toBe("Uno mas dos es tres");
  })
});
