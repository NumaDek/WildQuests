import { AbstractControl, ValidationErrors } from "@angular/forms";

export function isReferenceFormatted(control: AbstractControl): ValidationErrors | null {
    const regex: RegExp = new RegExp("^[0-9]#[0-9A-Z]+$");
    const valid: boolean = regex.test(control.value);
    const errors: ValidationErrors = {
        rules: "La réference n'est pas correctement formattée."
    }
    return(valid ? null : errors);
}