import {Component, Input, OnInit, Output} from '@angular/core';
import {AppService} from "../app.service";
import {IBranch} from "./branch.interface";
import {BranchService} from "./service/branch.service";

@Component({
  selector: 'app-branch [branch]',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  @Input() branch!: IBranch;
  label?: string;

  public get current():IBranch {
    return this.branchService?.currentBranch as IBranch;
  }

  constructor(private appService: AppService, private branchService: BranchService) {
  }

  ngOnInit(): void {
    console.log(this.branch)
    this.label = `Hey, ${this.appService.userName}, this are the branches that are next to you:`;
  }

  onClick() {
    this.branchService.preview(this.branch)
  }
}
