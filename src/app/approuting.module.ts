import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningComponent } from './learning/learning.component';
import { PemuComponent } from './pemu/pemu.component';

const routes: Routes = [
   {path: 'pemu', component:PemuComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component:DashboardComponent},
  {path: 'learning', component:LearningComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
