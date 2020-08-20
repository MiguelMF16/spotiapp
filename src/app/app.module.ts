import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AnotacionesmiguelComponent } from './components/anotacionesmiguel/anotacionesmiguel.component';


// importación de rutas
import {ROUTES} from './app.routes';
import { RouterModule } from '@angular/router';
// services
import { LolService } from './services/lol.service';
import { SpotifyService } from './services/spotify.service';

// pipes
import { NoimgPipe } from './pipes/noimg.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    AnotacionesmiguelComponent,
    NoimgPipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [LolService, SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
