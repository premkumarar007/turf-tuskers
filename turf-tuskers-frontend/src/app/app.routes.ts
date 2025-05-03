import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'match/:id', component: MatchDetailsComponent},
    {path: 'admin', component: AdminDashboardComponent},
];
