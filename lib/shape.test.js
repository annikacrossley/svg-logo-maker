const Shape = require('../lib/shape.js');

describe('Shape', () => {
    describe('Circle', () => {
      it('should return a circle', () => {
        const circular = `<circle cx="150" cy="100" r="80" fill="white" />`;
        const shape = new Shape('circle');
        expect(shape).toEqual(circular);
      })
    })
});