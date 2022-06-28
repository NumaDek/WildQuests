import { AbstractControl, ValidationErrors } from "@angular/forms";

export function isEmailValid(control: AbstractControl): ValidationErrors | null{
    let index: number;
    const errors = {
        rules : "L'email doit être valide."
    }
    return (control.value.indexOf("@") >= 1 && (index = control.value.indexOf(".")) >= 2 && control.value.length > index + 2 ? null : errors);
}
