import { AbstractControl, Validators } from '@angular/forms';

export function isRequiredValidator(control: AbstractControl): Validators | null {
  const valid: boolean = !control.get('title')?.errors?.['required'] || !control.get('movieId')?.errors?.['required'];
  const errors: Validators = {
    isRequiredValidator: {
      isRequired: {
        rules: "*Le titre ou l'identifiant du film est requis.",
      }
    }
  };
  return valid ? null : errors;
}
