import { Component } from '@angular/core';
import { MatchService, Match } from '../../services/match.service';
import { MatchCardComponent } from '../match-card/match-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [MatchCardComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  matches: Match[] = [];

  constructor(private matchService: MatchService) {
    this.loadMatches();
  }

  loadMatches() {
    this.matchService.getMatches().subscribe((matches: Match[]) => {
      this.matches = matches;
    });
  }

  onMatchSelected(match: Match) {
    console.log('Selected match:', match);
    // Handle match selection logic here
  }
  onMatchDeleted(matchId: number) {
    this.matches = this.matches.filter(match => match.id !== matchId);
  }  
}
