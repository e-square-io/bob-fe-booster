import {Component, OnInit} from '@angular/core';
import {BranchService} from "../service/branch.service";
import {IBranch} from "../branch.interface";

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {
  branches?: IBranch[]
  isRead = false;

  constructor(private branchService: BranchService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.branches = this.branchService.getAllBranches();
    this.isRead = true;
    console.log(this.branches)
  }

}
