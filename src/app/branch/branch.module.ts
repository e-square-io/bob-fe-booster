import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BranchComponent} from './branch.component';
import {RouterModule} from "@angular/router";
import { BranchListComponent } from './branch-list/branch-list.component';


@NgModule({
  declarations: [
    BranchComponent,
    BranchListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'branches', component: BranchComponent}
    ])
  ]
})
export class BranchModule {
}
