import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { FormBuilder, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'pct';
}
