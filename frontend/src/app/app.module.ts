import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { RolComponent } from './components/rol/rol.component';
import { OpcionesmenusComponent } from './components/opcionesmenus/opcionesmenus.component';
import { menuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    RolComponent,
    OpcionesmenusComponent,
    menuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'admin/employees',
        component:EmployeeComponent
      },
      {
        path: 'admin/roles',
        component:RolComponent
      },
      {
        path: 'admin/opcionesmenu',
        component:OpcionesmenusComponent
      },   
      {
        path: 'admin/menus',
        component:menuComponent
      },        
    ])    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
