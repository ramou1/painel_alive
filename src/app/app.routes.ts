import { Routes } from '@angular/router';
import { APP_ROUTES } from './constants/routes.const';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { InfluencersComponent } from './pages/influencers/influencers.component';

export const routes: Routes = [
    {
        path: APP_ROUTES.LOGIN,
        component: LoginComponent
    },
    {
        path: APP_ROUTES.DASHBOARD,
        component: DashboardComponent
    },
    {
        path: APP_ROUTES.BRANDS,
        component: BrandsComponent
    },
    {
        path: APP_ROUTES.INFLUENCERS,
        component: InfluencersComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
    }
];
