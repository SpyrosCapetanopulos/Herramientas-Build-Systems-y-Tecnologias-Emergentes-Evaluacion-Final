import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageBarraComponent } from './components/page-barra/page-barra.component';
import { PageCarritoComponent } from './components/page-carrito/page-carrito.component';
import { PageTiendaComponent } from './components/page-tienda/page-tienda.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageBarraComponent,
    PageCarritoComponent,
    PageTiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
