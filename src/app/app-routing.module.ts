import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmasComponent } from './armas/armas.component';
import { MapasComponent } from './mapas/mapas.component';
import { AgentesComponent } from './agentes/agentes.component';
import { DetalleArmaComponent } from './detalle-arma/detalle-arma.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'agentes', component: AgentesComponent},
  {path: 'armas', component: ArmasComponent},
  {path: 'mapas', component: MapasComponent},
  {path: 'arma/:id', component: DetalleArmaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
