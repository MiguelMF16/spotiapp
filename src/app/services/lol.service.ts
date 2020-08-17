import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LolService {

  constructor(private http: HttpClient) { }

  getSummonerByName(){
    const headers = new HttpHeaders({
      Authorization: 'Bearer RGAPI-3befdd2a-3c59-4afb-8c30-17fd3d595662'
    });
    this.http.get("https://developer.riotgames.com/apis#champion-v3/GET_getChampionInfo", {headers}).subscribe(summondata =>{
      console.log(summondata);
    });
  }

}
