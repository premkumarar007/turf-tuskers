import { Component, Input } from '@angular/core';
import { Match } from '../../services/match.service';
import { sharedImports } from '../../shared/shared-imports';

@Component({
  selector: 'app-match-card',
  imports: [sharedImports],
  templateUrl: './match-card.component.html',
  styleUrl: './match-card.component.scss'
})
export class MatchCardComponent {
  @Input() match!: Match;

}
