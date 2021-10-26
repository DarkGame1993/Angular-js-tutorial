import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidator } from './my.valid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required, 
        Validators.email,
        MyValidator.restrictedEmails
      ], MyValidator.uniqueEmail),
      password: new FormControl(null, [
        Validators.required, 
        Validators.minLength(6)
      ]),
      addresses: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),

      skills: new FormArray([])
    });
  }
  submit() {
    if(this.form.valid) {
      console.log(this.form)

      const FormData = {...this.form.value}
  
      console.log("Data", FormData)
    }
    
  }
  setCapital() {
    const cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }
    const cityKey = this.form.get('addresses').get('country').value
    const city = cityMap[cityKey]
    this.form.patchValue({addresses: {city}})
    console.log(cityKey)
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    //(<FormArray>this.form.get('skills')).push //как кастить
    (this.form.get('skills') as FormArray).push(control)
  }
}
