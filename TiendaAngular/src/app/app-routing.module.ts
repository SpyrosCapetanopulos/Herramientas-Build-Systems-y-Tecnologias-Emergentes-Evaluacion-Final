import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageCarritoComponent } from './components/page-carrito/page-carrito.component';
import { PageTiendaComponent } from './components/page-tienda/page-tienda.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent},
  {path: 'tienda', component: PageTiendaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
