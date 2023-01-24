import { revertString } from './reverseString';

describe('test for revertString function', () => {
  it('проверка на реверс стороки', () => 
     expect(revertString('Helloy jest')).toBe('tsej yolleH'));
});
