import { expect } from 'chai';
import sreducer from '../app.js';

describe('tests', () => {
  describe('main', () => {

    it('[1,2,3,4,5,6,7,8]', () => {
      return sreducer([1, 2, 3, 4, 5, 6, 7, 8]).then((result) => {
        expect(result).to.equal('1-8');
      });
    });

    it('[1,3,4,5,6,7,8]', () => {
      return sreducer([1, 3, 4, 5, 6, 7, 8]).then((result) => {
        expect(result).to.equal('1,3-8');
      });
    });

    it('[1,3,4,5,6,7,8,10,11,12]', () => {
      return sreducer([1, 3, 4, 5, 6, 7, 8, 10, 11, 12]).then((result) => {
        expect(result).to.equal('1,3-8,10-12');
      });
    });

    it('[1,2,3]', () => {
      return sreducer([1, 2, 3]).then((result) => {
        expect(result).to.equal('1-3');
      });
    });

    it('[1,2]', () => {
      return sreducer([1, 2]).then((result) => {
        expect(result).to.equal('1,2');
      });
    });

    it('[1,2,4]', () => {
      return sreducer([1, 2, 4]).then((result) => {
        expect(result).to.equal('1,2,4');
      });
    });

    it('[1,2,4,5,6]', () => {
      return sreducer([1, 2, 4, 5, 6]).then((result) => {
        expect(result).to.equal('1,2,4-6');
      });
    });

    it('[1,2,3,7,8,9,15,17,19,20,21]', () => {
      return sreducer([1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21]).then((result) => {
        expect(result).to.equal('1-3,7-9,15,17,19-21');
      });
    });

    it('[1,2,3,4,5,6,100,1091,1999,2000,2001,2002]', () => {
      return sreducer([1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002]).then((result) => {
        expect(result).to.equal('1-6,100,1091,1999-2002');
      });
    });

    it('[1]', () => {
      return sreducer([1]).then((result) => {
        expect(result).to.equal('1');
      });
    });

    it('[1,3,5,7,9,11]', () => {
      return sreducer([1, 3, 5, 7, 9, 11]).then((result) => {
        expect(result).to.equal('1,3,5,7,9,11');
      });
    });

  });
});
