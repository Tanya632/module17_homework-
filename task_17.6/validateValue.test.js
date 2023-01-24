
import validateValue from './validateValue';

describe('Корректное значение',() => {
    expect(validateValue(99)).toBe(true);
})

it(' Значение меньше', () => {
    expect(validateValue(-1)).toBe(false);
})

it('Значение больше', () => {
    expect(validateValue(101)).toBe(false);
    
})

it('Пограничное значение', () => {
    expect(validateValue(0)).toBe(true);
    
})


