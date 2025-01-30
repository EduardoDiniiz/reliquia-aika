import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

interface Relic {
  by_nation: number;
  devir: number;
  slot: number;
  relic_date: string;
  relic: string;
  char_name: string;
  char_level: number;
  guild_idx: number;
  guild_name: string;
  is_guild_mark: number;
}

@Injectable({
  providedIn: 'root'
})
export class RelicsService {
  private apiUrl = 'https://external-aika-br-api.cbmgames.com/api/v1/rank/relics';

  constructor(private http: HttpClient) {}

  getRelics(): Observable<Relic[]> {
    const requests = [1, 2, 3, 4, 5].map(nation =>
      this.http.post<{ list: Relic[] }>(this.apiUrl, { by_nation: nation })
    );
    return forkJoin(requests).pipe(
      map(responses => {
        const allRelics = responses.flatMap(res => res.list);
        const now = new Date();

        return allRelics
          .map(relic => ({
            ...relic,
            relic_date: relic.relic_date.trim(),
            relicDateObj: new Date(relic.relic_date.trim())
          }))
          .filter(relic => relic.relicDateObj < now);
      })
    );
  }
}