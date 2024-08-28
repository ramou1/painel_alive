import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NbLayoutModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
