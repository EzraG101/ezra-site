import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

// English
import { HomepageComponent } from './homepage/homepage.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { LibraryComponent } from './library/library.component';

// Spanish
import { HomeComponent } from './home/home.component';
import { FolletosComponent } from './folletos/folletos.component';
import { ClasesComponent } from './clases/clases.component';
import { RecursosComponent } from './recursos/recursos.component';
import { BlogComponent } from './blog/blog.component';
import { CambiosComponent } from './cambios/cambios.component';

const routes: Routes = [
  // English
  { path: '', component: HomepageComponent },
  { path: 'research', component: ResearchComponent},
  { path: 'teaching', component: TeachingComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'resources', component: RecursosComponent},
  { path: 'blog', component: BlogComponent},

  // Spanish
  { path: 'es', component: HomeComponent },
  { path: 'blog/es', component: BlogComponent },
  { path: 'blog/:post/es', component: BlogComponent },
  { path: 'folletos/es', component: FolletosComponent },
  { path: 'clases/es', component: ClasesComponent },
  { path: 'recursos/es', component: RecursosComponent },
  { path: 'cambios/es', component: CambiosComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
