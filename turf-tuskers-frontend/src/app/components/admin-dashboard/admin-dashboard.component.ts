import { Component, OnInit } from '@angular/core';
import { Player, PlayerService } from '../../services/player.service';
import { sharedImports } from '../../shared/shared-imports';

@Component({
  selector: 'app-admin-dashboard',
  imports: [sharedImports],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {

  players: Player[] = [];
  newPlayer: Player = { id: 0, matchId: 0, name: '', team: '', role: '' };

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playerService.getAll().subscribe(data => this.players = data);
  }

  addPlayer(): void {
    this.playerService.create(this.newPlayer).subscribe(() => {
      this.newPlayer = { id: 0, matchId: 0, name: '', team: '', role: '' };
      this.loadPlayers();
    });
  }

  deletePlayer(id: number): void {
    this.playerService.delete(id).subscribe(() => this.loadPlayers());
  }

}
