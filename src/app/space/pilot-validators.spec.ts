import { PilotValidators } from './pilot-validators';
import { FormControl } from '@angular/forms';
import { ajax } from 'rxjs/ajax';
import { of } from 'rxjs';

fdescribe('PilotValidators', () => {
  it('should create an instance', () => {
    expect(new PilotValidators()).toBeTruthy();
  });
  describe('pilotForbidden', () => {
    describe('when value is empty', () => {
      it('should return observable with null', () => {
        const control = new FormControl('');
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });
    describe('when value is forbidden', () => {
      it('should return observable with validation object', () => {
        const control = new FormControl('Ciapciak');
        spyOn(ajax, 'getJSON').and.returnValue(of([{name: 'Ciapciak'}]));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toEqual({pilotForbidden: true}));
      });
    });
    describe('when value is not forbidden', () => {
      it('should return observable with null', () => {
        const control = new FormControl('Adama');
        spyOn(ajax, 'getJSON').and.returnValue(of([]));
        PilotValidators.pilotForbidden(control)
          .subscribe((result) => expect(result).toBeNull());
      });
    });
  });
});
