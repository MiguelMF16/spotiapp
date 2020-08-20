import { Routes } from '@angular/router';

// Componentes page
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

// Componentes shared
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AnotacionesmiguelComponent } from './components/anotacionesmiguel/anotacionesmiguel.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'search', component: SearchComponent },
    { path: 'anotacionesmiguel', component: AnotacionesmiguelComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
