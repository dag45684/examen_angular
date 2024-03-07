import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet, provideRouter } from '@angular/router';
import {routes} from './app.routes'
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from  '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaludoComponent } from './saludo/saludo.component';
import { ContadorComponent } from './contador/contador.component';
import { LapsosComponent } from './lapsos/lapsos.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SaludoComponent,
    ContadorComponent,
    LapsosComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    BrowserAnimationsModule,
    RouterOutlet,
    RouterModule
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
