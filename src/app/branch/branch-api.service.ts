import { Injectable } from '@angular/core';
import {IBranch} from "./branch.interface";

@Injectable({
  providedIn: 'root'
})
export class BranchApiService {

  constructor() { }

  getAllBranches():IBranch[]{
    return [];
  }
}
