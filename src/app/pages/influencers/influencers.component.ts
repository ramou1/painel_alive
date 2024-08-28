import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NbLayoutModule } from '@nebular/theme';

@Component({
  selector: 'app-influencers',
  standalone: true,
  imports: [CommonModule, NbLayoutModule],
  templateUrl: './influencers.component.html',
  styleUrl: './influencers.component.scss'
})
export class InfluencersComponent {

}
