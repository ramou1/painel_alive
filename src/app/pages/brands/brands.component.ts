import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [CommonModule, NbLayoutModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {

}
