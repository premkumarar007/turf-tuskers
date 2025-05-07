import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { MatchDetailsComponent } from "./components/match-details/match-details.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'turf-tuskers-frontend';
}
