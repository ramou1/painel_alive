import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbCardModule, NbIconModule, NbLayoutModule, NbMenuItem, NbMenuModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NbLayoutModule, 
    NbSidebarModule,
    NbIconModule,
    NbEvaIconsModule,
    NbMenuModule,
    NbCardModule,
  ],
  providers: [NbSidebarService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'alive_web';
  showSidebar = true;

  public menu: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard',
      pathMatch: 'full',
    },
    { 
      title: 'Brands',
      icon: 'shopping-cart-outline',
      link: '/brands',
      pathMatch: 'full',
    },
    {
      title: 'Influencers',
      icon: 'people-outline',
      link: '/influencers',
      pathMatch: 'full',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.showSidebar = !this.router.url.includes('/login');
    });
  }
}
