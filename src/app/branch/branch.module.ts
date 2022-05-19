import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BranchComponent} from './branch.component';
import {RouterModule} from "@angular/router";
import { BranchListComponent } from './branch-list/branch-list.component';
import {MatButtonModule} from "@angular/material/button";
import { BranchPreviewComponent } from './branch-preview/branch-preview.component';
import { AddressPipe } from './pipe/address.pipe';


@NgModule({
  declarations: [
    BranchComponent,
    BranchListComponent,
    BranchPreviewComponent,
    AddressPipe
  ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: 'branches', component: BranchListComponent}
        ]),
        MatButtonModule
    ]
})
export class BranchModule {
}
