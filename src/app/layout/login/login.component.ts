import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../layout.scss']
})
export class LoginComponent implements OnInit {
  title = 'Welcome'
  passwordValidators = [Validators.required,Validators.minLength(2)];
  formGroup:FormGroup = this.formBuilder.group({
    username: [undefined,Validators.required],
    password: [undefined,this.passwordValidators]
  });
  btn = {
    submit: 'Submit',
    reset: 'Reset form'
  }

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formGroup.value);
    console.log('valid',this.formGroup.valid);
    if(this.formGroup.valid){

    }
  }
}
