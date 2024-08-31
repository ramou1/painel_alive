import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NbSidebarService, NbMenuItem, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule, NbActionsModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

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
    NbActionsModule, // Adiciona o módulo de ações
  ],
  providers: [NbSidebarService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alive_web';
  isUserAuthorized = false;
  isMobile = false;

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

  constructor(private router: Router, private sidebarService: NbSidebarService) { }

  ngOnInit() {
    this.isUserAuthorized = this.checkUserAuthorization();
    this.checkIfMobile();
    
    this.router.events.subscribe(() => {
      if (this.router.url.includes('/login')) {
        this.sidebarService.collapse('menu-sidebar'); 
        this.isMobile = false;
      } else if (!this.isMobile) {
        this.sidebarService.expand('menu-sidebar');
      }
    });
  }

  // Detecta a largura da tela para determinar se é mobile
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkIfMobile();
  }

  checkIfMobile() {
    this.isMobile = window.innerWidth < 768; // Define 768px como ponto de ruptura para mobile
  }

  toggleSidebar(): void {
    this.sidebarService.toggle(true, 'menu-sidebar');
  }

  checkUserAuthorization(): boolean {
    return true;
  }
}
