
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LearningComponent } from './learning/learning.component';
import { PemuComponent } from './pemu/pemu.component';


export const routes: Routes = [

  {
    path: '', component: PemuComponent
  },
  {

    path: 'dashboard', component: DashboardComponent
  },
  {
    path:'learning', component:LearningComponent
  },
  {
    path:'pemu', component:PemuComponent
  }
];


