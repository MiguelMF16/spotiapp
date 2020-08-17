import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LolService } from '../../services/lol.service';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  constructor(private http: HttpClient, private lolServices: LolService, private spotiService: SpotifyService) { 

    this.http.get("https://restcountries.eu/rest/v2/lang/es").subscribe((paisesres:any) =>{
      this.paises = paisesres;
      console.log(paisesres);

     // this.lolServices.getSummonerByName();
      this.spotiService.getNewRelease();
    });
  }

  ngOnInit(): void {
  }

}
