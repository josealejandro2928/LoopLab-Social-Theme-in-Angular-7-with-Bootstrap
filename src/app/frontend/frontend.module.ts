import { AppShareModule } from './../app-share/app-share.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontComponent } from './front/front.component';
import { Page1Component } from './page1/page1.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [FrontComponent, Page1Component, HomeComponent],
  imports: [
    CommonModule,
    AppShareModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
