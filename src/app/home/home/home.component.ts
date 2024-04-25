import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormRecord, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Ouput() data!: Array<User>
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  SubmitForm() {
    this.data = this.userForm.value;
    console.log(this.data);
  }
}
function Ouput(): (target: HomeComponent, propertyKey: "data") => void {
  throw new Error('Function not implemented.');
}

