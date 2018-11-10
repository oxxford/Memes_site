import { validate } from '../bill/billForm';

describe('validation', () => {
   it('fieldValidation', ()=> {
      expect(validate({

      })).toEqual({
          name: 'Required',
          do: 'Required'
      });
   });

    it('fieldValidation', ()=> {
        expect(validate({
            name: 'lol'
        })).toEqual({
            do: 'Required'
        });
    });

    it('fieldValidation', ()=> {
        expect(validate({
            name: 'lol',
            do: 'lol'
        })).toEqual({
        });
    });
});
