// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MatchService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Match {
  id: number;
  teamA: string;
  teamB: string;
  date: string;
  venue: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private matches: Match[] = [
    {
      id: 1,
      teamA: 'India',
      teamB: 'Australia',
      date: '2025-05-01',
      venue: 'Mumbai',
      status: 'Upcoming'
    },
    {
      id: 2,
      teamA: 'England',
      teamB: 'South Africa',
      date: '2025-05-03',
      venue: 'London',
      status: 'Upcoming'
    }
  ];

  getMatches(): Observable<Match[]> {
    return of(this.matches);
  }

  getMatchById(id: number): Observable<Match | undefined> {
    return of(this.matches.find(m => m.id === id));
  }
}


