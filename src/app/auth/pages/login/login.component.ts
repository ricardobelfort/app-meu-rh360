/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: User;

  constructor(private router: Router) {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(4),
      ]),
      repeat_password: new FormControl(this.user.repeat_password, [
        Validators.required,
        Validators.minLength(4),
      ]),
      terms: new FormControl(this.user.terms, Validators.required),
    });
  }

  public validate(): void {
    if (this.loginForm.invalid) {
      for (const control of Object.keys(this.loginForm.controls)) {
        this.loginForm.controls[control].markAsTouched();
      }
      return;
    }

    this.user = this.loginForm.value;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }
}
