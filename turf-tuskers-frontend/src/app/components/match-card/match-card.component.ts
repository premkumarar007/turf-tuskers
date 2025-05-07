import { Component, Input } from '@angular/core';
import { Match } from '../../services/match.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-card',
  imports: [RouterModule, CommonModule],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss'
})
export class MatchCardComponent {
  @Input() match!: Match;

}
