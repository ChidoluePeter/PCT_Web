
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LearningComponent } from './learning/learning.component';



export const routes: Routes = [

  {
    path: '', component: LoginComponent
  },
  {

    path: 'dashboard', component: DashboardComponent
  },
  {
    path:'learning', component:LearningComponent
  }
];


