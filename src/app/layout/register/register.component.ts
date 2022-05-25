import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../layout.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  formGroup = this.formBuilder.group({
    startDate:[],
    country:[]
  });
  title = 'Register!';
  btn ={
    submit:'submit',
    reset:'reset'
  };

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
