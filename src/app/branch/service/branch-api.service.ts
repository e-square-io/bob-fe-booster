import { Injectable } from '@angular/core';
import {IBranch} from "../branch.interface";
import {BranchMock} from "../branch.mock";

@Injectable({
  providedIn: 'root'
})
export class BranchApiService {

  constructor() { }

  getAllBranches():IBranch[]{
    return BranchMock;
  }
}
