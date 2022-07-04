import { AbstractControl, Validators } from "@angular/forms";

export function rangeDateValidator(control: AbstractControl): Validators | null {
    const currentYear: number = new Date().getFullYear()
    const submittedYear: number = parseInt(control.value);
    const valid = submittedYear >= 1900 && submittedYear <= currentYear;
    const errors : Object = {
        min: {
            rules: `L'année doit être comprise entee 1900 et ${currentYear}`
        }
    }
    return (valid ? null : errors);
}