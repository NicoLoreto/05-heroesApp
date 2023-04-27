import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

// en ese modulo tengo que crear rutas del misma manera
// excepto que tendra path y children porque seran rutas hijas
// el path va a ocupar un segmento, ej path: 'auth/'

// como son rutas hijas se importan como RouterModule.forChild()
// tmb debo exportar el RouterModule

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registro',
        component: RegistroComponent
      },
      {
        path: '**',
        redirectTo: 'login'
      }

    ]
  }
];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AuthRoutingModule { }
