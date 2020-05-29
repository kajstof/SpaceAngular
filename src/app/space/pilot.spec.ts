import { Pilot } from './pilot';
import { FormControl } from '@angular/forms';
import { PilotValidators } from './pilot-validators';

fdescribe('Pilot', () => {
  it('should create an instance', () => {
    expect(new Pilot()).toBeTruthy();
  });
  describe('pilotName', () => {
    describe('when value is empty', () => {
      it('should return null', () => {
        const control = new FormControl('');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });
    describe('when starts from uppercase letter', () => {
      it('should return null', () => {
        const control = new FormControl('Adam');
        expect(PilotValidators.pilotName(control)).toBeNull();
      });
    });
    describe('when starts from lowcase letter', () => {
      it('should return validation object', () => {
        const control = new FormControl('adam');
        expect(PilotValidators.pilotName(control)).toEqual({pilotName: true});
      });
    });
  });
});
