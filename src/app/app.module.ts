import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { DatePipe } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PageComponent } from './page/page.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FolletosComponent } from './folletos/folletos.component';
import { ClasesComponent } from './clases/clases.component';
import { RecursosComponent } from './recursos/recursos.component';
import { MathjaxComponent } from './mathjax/mathjax.component';
import { GlobalService } from './global.service';
import { BlogComponent } from './blog/blog.component';
import { CambiosComponent } from './cambios/cambios.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResearchComponent } from './research/research.component';
import { TeachingComponent } from './teaching/teaching.component';
import { LibraryComponent } from './library/library.component';
import { TitlebarESComponent } from './titlebar-es/titlebar-es.component';
import { NavbarESComponent } from './navbar-es/navbar-es.component';
import { BlogESComponent } from './blog-es/blog-es.component';

@NgModule({
  declarations: [
    AppComponent,
    // PageComponent,
    NavbarComponent,
    NotFoundComponent,
    HomeComponent,
    FolletosComponent,
    ClasesComponent,
    RecursosComponent,
    MathjaxComponent,
    BlogComponent,
    CambiosComponent,
    TitlebarComponent,
    HomepageComponent,
    ResearchComponent,
    TeachingComponent,
    LibraryComponent,
    TitlebarESComponent,
    NavbarESComponent,
    BlogESComponent,
  ],
  imports: [
    BrowserModule,
    YouTubePlayerModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe, GlobalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
