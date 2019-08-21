import { MizuxeBookComponent } from './mizuxe-book/mizuxe-book.component';
import { Page1Component } from './page1/page1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoopLabComponent } from './loop-lab/loop-lab.component';

const routes: Routes = [
  {
    path: '',
    component: LoopLabComponent,
  },
  {
    path: 'mizuxe-book',
    component: MizuxeBookComponent
  },
  {
    path: 'page1',
    component: Page1Component
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendRoutingModule { }
