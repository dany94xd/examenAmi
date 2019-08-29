import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolComponent } from 'src/app/components/rol/rol.component';
import { menuComponent } from 'src/app/components/menu/menu.component';
import { OpcionesmenusComponent } from 'src/app/components/opcionesmenus/opcionesmenus.component';



import { RouterModule, Routes,PreloadAllModules } from '@angular/router';


const routes: Routes = [
  { path: 'admin/roles', component: RolComponent},
  { path: 'admin/menus', component: menuComponent },
  { path: 'admin/opcionesmenus', component: OpcionesmenusComponent }, 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }