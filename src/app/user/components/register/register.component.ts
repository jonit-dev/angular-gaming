import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  // registerForm should be bind to the <form> html element through the [formGroup] directive
  registerForm = new FormGroup({
    // you can try adding these validators directly on the html template. Some are supported.
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(18)]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /*
        - at least 8 characters
        - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number
        - Can contain special characters
        */
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
      ),
    ]),

    confirmPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
  });

  constructor() {}

  public register() {
    console.log(this.registerForm.value);
  }
}
