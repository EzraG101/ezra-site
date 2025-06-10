import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

// English
import { HomepageComponent } from './homepage/homepage.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { LibraryComponent } from './library/library.component';
import { BlogComponent } from './blog/blog.component';


// Spanish
import { HomeComponent } from './home/home.component';
import { FolletosComponent } from './folletos/folletos.component';
import { ClasesComponent } from './clases/clases.component';
import { RecursosComponent } from './recursos/recursos.component';
import { BlogESComponent } from './blog-es/blog-es.component';
import { CambiosComponent } from './cambios/cambios.component';

const routes: Routes = [
  // English
  { path: '', component: HomepageComponent },
  { path: 'research', component: ResearchComponent},
  { path: 'teaching', component: TeachingComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'resources', component: RecursosComponent},
  { path: 'blog', component: BlogComponent},

  { path: 'blog/post/:post', component: BlogComponent},


  // Spanish
  { path: 'es', component: HomeComponent },
  { path: 'blog/es', component: BlogESComponent },
  { path: 'blog/post/:post/es', component: BlogESComponent },
  { path: 'research/es', component: FolletosComponent },
  { path: 'teaching/es', component: ClasesComponent },
  { path: 'resources/es', component: RecursosComponent },
  { path: 'library/es', component: CambiosComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
