import { getFormattedNumbers } from '../../utils/functions';

describe('Happy path - getFormattedNumbers function', () => {
  it('should be a function', () => {
    expect(getFormattedNumbers).toBeInstanceOf(Function);
  });

  it('should return number one', () => {
    expect(getFormattedNumbers(1)).toBe('1');
  });

  it('should return number one hundred', () => {
    expect(getFormattedNumbers(100)).toBe('100');
  });

  it('should return number ten thousand formatted', () => {
    expect(getFormattedNumbers(10000)).toBe('10,000');
  });

  it('should return number one million formatted', () => {
    expect(getFormattedNumbers(1000000)).toBe('1,000,000');
  });
});

describe('Unhappy path - getFormattedNumbers function', () => {
  it('should return NaN error if a string with letters is sent', () => {
    expect(getFormattedNumbers('string')).toBe('NaN');
  });

  it('should return NaN error if nothing is sent', () => {
    // @ts-ignore
    expect(getFormattedNumbers()).toBe('NaN');
  });
});
