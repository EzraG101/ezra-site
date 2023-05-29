import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [];
@NgModule({
  declarations: [AppComponent, PageComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, MatToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
