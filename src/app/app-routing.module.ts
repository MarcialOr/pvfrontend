import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticuloComponent } from './features/articulo/articulo.component';
import { CrearArticuloComponent } from './features/crear-articulo/crear-articulo.component';
import { EditarArticuloComponent } from './features/editar-articulo/editar-articulo.component';


const routes: Routes = [
  {path: 'articulos', component: ArticuloComponent},
  {path: 'crear-articulo', component: CrearArticuloComponent},
  {path: 'editar-articulo/:id', component: EditarArticuloComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
