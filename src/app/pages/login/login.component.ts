import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbLayoutModule } from '@nebular/theme';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NbFormFieldModule,
    NbInputModule,
    NbDatepickerModule,
    NbDialogModule,
    NbCardModule,
    NbButtonModule,
    NbIconModule,
    NbCheckboxModule,
    NbLayoutModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  constructor(private router: Router) { }

  login() {
    this.router.navigate(['/dashboard']);
  }

  forgotPassword() {
    // TODO FORGOT PASSWORD
    // this.router.navigate(['/forgot-password']);
  }
}
