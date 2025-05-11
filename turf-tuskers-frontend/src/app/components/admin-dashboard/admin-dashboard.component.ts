import { Component, OnInit } from '@angular/core';
import { PlayerService, Player } from '../../services/player.service';
import { MatchService, Match } from '../../services/match.service';
import { sharedImports } from '../../shared/shared-imports';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [sharedImports],
  providers: [PlayerService, MatchService],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  players: Player[] = [];
  newPlayer: Player = { id: 0, matchId: 0, name: '', team: '', role: '' };

  matches: Match[] = [];
  newMatch: Match = {
    id: 0,
    teamA: '',
    teamB: '',
    matchDate: '',
    venue: '',
    status: 'Upcoming'
  };

  constructor(private playerService: PlayerService, private matchService: MatchService) {}

  ngOnInit(): void {
    this.loadPlayers();
    this.loadMatches();
  }

  loadPlayers(): void {
    this.playerService.getAll().subscribe(data => this.players = data);
  }

  loadMatches(): void {
    this.matchService.getAll().subscribe(data => this.matches = data);
  }

  addPlayer(): void {
    this.playerService.create(this.newPlayer).subscribe(() => {
      this.newPlayer = { id: 0, matchId: 0, name: '', team: '', role: '' };
      this.loadPlayers();
    });
  }

  addMatch(): void {
    this.matchService.create(this.newMatch).subscribe(() => {
      this.newMatch = { id: 0, teamA: '', teamB: '', matchDate: '', venue: '', status: 'Upcoming' };
      this.loadMatches();
    });
  }

  deletePlayer(id: number): void {
    this.playerService.delete(id).subscribe(() => this.loadPlayers());
  }
}