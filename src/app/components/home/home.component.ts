import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  paises: any[] = [];
  nuevasCanciones: any[] = [];
  loading: boolean;
  error = false;
  mensajeError = '';
  constructor(private http: HttpClient, private spotifyService: SpotifyService) {

    // this.http.get("https://restcountries.eu/rest/v2/lang/es").subscribe((paisesres:any) =>{
    //   // this.paises = paisesres;
    //   // console.log(paisesres);

    //  // this.lolServices.getSummonerByName();
      
    // });

    this.loading = true;
    this.spotifyService.getNewRelease().subscribe((albumret: any) =>{
      this.nuevasCanciones = albumret;
      this.loading = false;
    }, (errorServicio) =>{
      this.error = true;
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
  }


  ngOnInit(): void {
  }

}
