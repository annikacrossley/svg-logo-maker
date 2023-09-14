const {Circle, Triangle, Square} = require('../lib/shape.js');

describe('Shape', () => {
    describe('Circle', () => {
      test('return circle template', () => {
        const data = {choices: ['circle', 'triangle', 'square']}
        data['circle'] = new Circle;
        expect(data).toEqual({
          choices: ['circle', 'triangle', 'square'],
          'circle': new Circle
        })
      })
    })
});

describe('Shape', () => {
  describe('Triangle', () => {
    test('return triangle template', () => {
      const data = {choices: ['circle', 'triangle', 'square']}
      data['triangle'] = new Triangle;
      expect(data).toEqual({
        choices: ['circle', 'triangle', 'square'],
        'triangle': new Triangle
      })
    })
  })
});

describe('Shape', () => {
  describe('Square', () => {
    test('return square template', () => {
      const data = {choices: ['circle', 'triangle', 'square']}
      data['square'] = new Square;
      expect(data).toEqual({
        choices: ['circle', 'triangle', 'square'],
        'square': new Square
      })
    })
  })
});