import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule, RequiredValidator } from '@angular/forms';




@Component({
  selector: 'app-pemu',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './pemu.component.html',
  styleUrl: './pemu.component.css'
})
export class PemuComponent {


}
