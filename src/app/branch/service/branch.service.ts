import {Injectable} from '@angular/core';
import {BranchApiService} from "./branch-api.service";
import {IBranch} from "../branch.interface";

@Injectable({
  providedIn: 'root'
})
export class BranchService {
  currentBranch?: IBranch;

  constructor(private branchApiService: BranchApiService) {
  }

  getAllBranches() {
    const list = this.branchApiService.getAllBranches()
    // ...
    console.log(list);
    return list;
  }

  getNearestBranch() {

  }

  getCalcBranchStock(branch: IBranch) {

  }

  preview(branch: IBranch) {
    this.currentBranch = branch;
  }
}
