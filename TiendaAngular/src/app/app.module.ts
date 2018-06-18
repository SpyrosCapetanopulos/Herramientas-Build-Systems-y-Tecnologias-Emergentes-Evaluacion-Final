import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageBarraComponent } from './components/page-barra/page-barra.component';
import { PageCarritoComponent } from './components/page-carrito/page-carrito.component';
import { PageTiendaComponent } from './components/page-tienda/page-tienda.component';
import { AppRoutingModule } from './/app-routing.module';

import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlashMessagesService } from 'angular2-flash-messages';
// imports de angular y firebase-firestore
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//credenciales de firebase-firestore
import { environment } from '../environments/environment';
//importa servicios, funciones login firebase-firestore
import { AuthService } from './services/auth.service';
//importa guard, para permitir o no accesos a diferentes rutas
import { AuthGuard } from './guards/auth.guard';

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
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
