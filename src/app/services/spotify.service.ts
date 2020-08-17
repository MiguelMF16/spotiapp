import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {



  constructor(private http: HttpClient) { 

    }

  getNewRelease() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAuWgPvyrsMGEdJSut4_ROl5hQ6xmSUMm0d9S6aPRGFRlwd4BMoBrweUpHe2Qaf0rRFSkctCEiNDHv4mNg'
    });
    //se puede añadir despues de releases lo siguiente, releases?limit=5 para limitar a 5 el resultado de respuestas
    this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers}).subscribe(dataspoti => {
      console.log(dataspoti);
    });
  
  }

}
