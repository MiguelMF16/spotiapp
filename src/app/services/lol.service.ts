import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LolService {

  constructor(private http: HttpClient) { }

  getSummonerByName(){
    const headers = new HttpHeaders({
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:79.0) Gecko/20100101 Firefox/79.0",
      "Accept-Language": "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
      "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
      "Origin": "https://developer.riotgames.com",
      "X-Riot-Token": "RGAPI-fe57ab63-92d2-4a62-baff-c5030a0bb9ec"
  });
    return this.http.get("/lol/platform/v3/champion-rotations", {headers});
  }
}
