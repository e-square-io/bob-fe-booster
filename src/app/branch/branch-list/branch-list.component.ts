import { Component, OnInit } from '@angular/core';
import {BranchService} from "../branch.service";

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.scss']
})
export class BranchListComponent implements OnInit {

  constructor(private branchService:BranchService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.branchService.getAllBranches();
  }

}
