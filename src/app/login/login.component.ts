import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthServiceService) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(40)]
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      const username = this.form.get('username')?.value;
      const pwd = this.form.get('password')?.value;
      this.auth.login(username, pwd);
    }
  }

}
