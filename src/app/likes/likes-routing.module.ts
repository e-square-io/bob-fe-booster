import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LikesComponent } from './likes.component';

const routes: Routes = [{ path: '', component: LikesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LikesRoutingModule { }
