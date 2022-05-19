import {Component, OnInit} from '@angular/core';
import {AppService} from "../app.service";

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  label?: string;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.label = `Hey, ${this.appService.userName}, this are the branches that are next to you:`;
  }

}
