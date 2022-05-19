import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  userName?:string = this.appService?.userName;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }


  hello() {
    console.log('hello');

  }

  loginUser() {
    this.appService.userName = 'Hila'
  }
}
