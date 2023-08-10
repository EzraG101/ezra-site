import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { FolletosComponent } from './folletos/folletos.component';
import { ClasesComponent } from './clases/clases.component';
import { RecursosComponent } from './recursos/recursos.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'folletos', component: FolletosComponent },
  { path: 'clases', component: ClasesComponent },
  { path: 'recursos', component: RecursosComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
