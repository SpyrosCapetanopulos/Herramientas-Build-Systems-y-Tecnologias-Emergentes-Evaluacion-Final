import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageLoginComponent } from './components/page-login/page-login.component';
import { PageCarritoComponent } from './components/page-carrito/page-carrito.component';
import { PageTiendaComponent } from './components/page-tienda/page-tienda.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: PageLoginComponent},
  {path: 'tienda', component: PageTiendaComponent , canActivate: [AuthGuard]},
  {path: 'carro', component: PageCarritoComponent , canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
