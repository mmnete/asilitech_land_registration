import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective } from '@angular/forms';
// import { AuthService } from 'src/common/services/auth_service/auth_service';

@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.scss']
})
export class LogInComponentComponent implements OnInit {

  loginForm: FormGroup;
  // constructor( private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }
  onSubmit(formData: FormGroup, loginDirective: FormGroupDirective) {
    const email = formData.value.email;
    const password = formData.value.password;
    // this.authService.signinUser(email, password);
  }

}
