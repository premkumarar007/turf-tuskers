import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Match {
  id: number;
  teamA: string;
  teamB: string;
  matchDate: string;
  venue: string;
  status: string;
}

@Injectable({ providedIn: 'root' })
export class MatchService {
  private apiUrl = 'https://localhost:5001/api/matches';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(this.apiUrl);
  }

  getById(id: number): Observable<Match> {
    return this.http.get<Match>(`${this.apiUrl}/${id}`);
  }

  create(match: Match): Observable<Match> {
    return this.http.post<Match>(this.apiUrl, match);
  }

  update(id: number, match: Match): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, match);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
