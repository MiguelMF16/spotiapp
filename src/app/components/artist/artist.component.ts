import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  loading: boolean;
  artista: any = {};
  topTracks: any = {};
  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params =>{
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
   }

  ngOnInit(): void {
  }

  getArtista(id: string){
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe( data =>{
      console.log(data);
      this.artista = data;
      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
    .subscribe(topTracks =>{
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
