import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../log-in-component/log-in-component.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  fieldRequired: string = "This field is required"
  constructor() { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.registerForm = new FormGroup(
      {
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.pattern(emailregex)]),
        password: new FormControl(null, [Validators.required, this.checkPassword]),
      }
    )

  }

  checkPassword(control: { value: any; }) {
    let enteredPassword = control.value
    let passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { 'requirements': true } : null;
  }

  onSubmit(formData: FormGroup, formDirective: FormGroupDirective): void {

    const email = formData.value.email;
    const password = formData.value.password;
    const username = formData.value.username;
    // this.auth.registerUSer(email, password, username);
    formDirective.resetForm();
    this.registerForm.reset();
  }
}