import { Component } from '@angular/core';
import { Match, MatchService } from '../../services/match.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-match-details',
  imports: [CommonModule],
  templateUrl: './match-details.component.html',
  styleUrl: './match-details.component.scss'
})
export class MatchDetailsComponent {

  match?: Match;

  constructor(private route: ActivatedRoute, private matchService: MatchService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchService.getMatchById(id).subscribe((m: Match | undefined) => this.match = m);
  }

}
