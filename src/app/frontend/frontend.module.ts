import { AppShareModule } from './../app-share/app-share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { LoopLabComponent } from './loop-lab/loop-lab.component';
import { Page1Component } from './page1/page1.component';
import { MizuxeBookComponent } from './mizuxe-book/mizuxe-book.component';

@NgModule({
  declarations: [
    LoopLabComponent,
    Page1Component,
    MizuxeBookComponent
  ],
  imports: [
    CommonModule,
    AppShareModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
