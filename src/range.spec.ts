import range from './range';

describe('range', () => {
    it('should work with only an end parameter', () => {
        expect(range(5)).toEqual([0, 1, 2, 3, 4]);
    });
    it('should work with two parameters', () => {
        expect(range(1, 5)).toEqual([1, 2, 3, 4]);
    });
    it('should work with two parameters if they\'re flipped', () => {
        expect(range(5, 1)).toEqual([1, 2, 3, 4]);
    });
    it('should allow specified steps', () => {
        expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]); // 0, 2, 4, 6, 8
    });
    it('should allow specified steps, even when things aren\'t evenly divisible', () => {
        expect(range(0, 10, 3)).toEqual([0, 3, 6, 9]); // 0, 3, 6, 9
    });
    it('should allow counting backwards', () => {
        expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
    });
    it('should work with forEach', () => {
        let s = '';
        range(10).forEach(i => {
            s += 'a';
        });
        expect(s).toEqual('aaaaaaaaaa');
    });
    it('should allow chained filtery goodness', () => {
        const a = range(20).filter(n => n % 2 === 0).filter(n => n % 3 === 0);
        expect(a).toEqual([0, 6, 12, 18]);
    });
});
