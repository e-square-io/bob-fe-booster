import { Component, OnInit } from '@angular/core';
import {BranchService} from "../service/branch.service";
import {IBranch} from "../branch.interface";

@Component({
  selector: 'app-branch-preview',
  templateUrl: './branch-preview.component.html',
  styleUrls: ['./branch-preview.component.scss']
})
export class BranchPreviewComponent implements OnInit {

  public get current():IBranch{
    return this.branchService?.currentBranch as IBranch;
  }
  constructor(private branchService:BranchService) { }

  ngOnInit(): void {
  }

}
