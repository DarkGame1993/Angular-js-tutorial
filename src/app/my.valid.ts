import { FormControl } from "@angular/forms";

export class MyValidator {

    static restrictedEmails(control: FormControl): {[key: string]: boolean} {
        if(['v@mail.ru','test@mail.ru'].includes(control.value)){
            return {restrictedEmail: true}
        }
        return null
    }
}
