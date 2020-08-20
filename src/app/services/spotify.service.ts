import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotytoken = 'AQCtK41MQ2bsDj-Ge_XOm-ooHgAJAD_6ppe_ZrwuC5ugXAylg_znHk6GwGUUTeW_ImXXRa_oPwsl4uxFxMo';

  constructor(private http: HttpClient) {

    }

    getQuery (query: string){
      const url = `https://api.spotify.com/v1/${query}`;
      const headers = new HttpHeaders({
        'Authorization': 'Bearer ' + this.spotytoken
      });
      return this.http.get(url, { headers });
    }

    getNewRelease() {
      // se puede añadir despues de releases lo siguiente, releases?limit=5 para limitar a 5 el resultado de respuestas
      return this.getQuery('browse/new-releases').pipe( map( data =>
         data['albums'].items) );
      // this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers})
     }


     getArtistas(termino: string) {
      // se puede añadir despues de releases lo siguiente, releases?limit=5 para limitar a 5 el resultado de respuestas
      return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe( map(data =>
        data['artists'].items) );
       }

       getArtista(idartista: string){
        return this.getQuery(`artists/${ idartista }`);
      }

      getTopTracks(idartista: string){
        return this.getQuery(`artists/${ idartista }/top-tracks?country=us`)
        .pipe(map(data => data['tracks']));
      }

     // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers})

}


