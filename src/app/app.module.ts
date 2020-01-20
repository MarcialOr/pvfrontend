import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticuloComponent } from './features/articulo/articulo.component';
import { CrearArticuloComponent } from './features/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './features/editar-articulo/editar-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloComponent,
    CrearArticuloComponent,
    EditarArticuloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
