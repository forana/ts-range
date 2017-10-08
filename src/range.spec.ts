import range from './range';

describe('range', () => {
    it('should work with only an end parameter', () => {
        let s = '';
        for (let i of range(5)) {
            s += 'a';
        }
        expect(s.length).toEqual(5);
    });
    it('should work with two parameters', () => {
        let s = '';
        for (let i of range(1, 5)) {
            s += 'a';
        }
        expect(s.length).toEqual(4);
    });
    it('should work with two parameters, if you read the source and actually put the parameters in the right order', () => {
        let s = '';
        for (let i of range(5, 1)) {
            s += 'a';
        }
        expect(s.length).toEqual(4);
    });
    it('should allow specified steps', () => {
        let s = '';
        for (let i of range(0, 10, 2)) {
            s += 'a';
        }
        expect(s.length).toEqual(5); // 0, 2, 4, 6, 8
    });
    it('should allow specified steps, even when things aren\'t evenly divisible', () => {
        let s = '';
        for (let i of range(0, 10, 3)) {
            s += 'a';
        }
        expect(s.length).toEqual(4); // 0, 3, 6, 9
    });
    it('should allow counting backwards', () => {
        let s = '';
        for (let i of range(5, 0, -1)) {
            s += 'a';
        }
        expect(s.length).toEqual(5);
    });
    it('should work with forEach', () => {
        let s = '';
        range(10).forEach(i => {
            s += 'a';
        });
        expect(s.length).toEqual(10);
    });
    it('should allow chained filtery goodness', () => {
        const a = range(20).filter(n => n % 2 === 0).filter(n => n % 3 === 0);
        expect(a.length).toEqual(4); // 0, 6, 12, 18
    });
});
