import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { HeroesModule } from './heroes/heroes.module';

// creando las rutas

const routes: Routes = [

  // defino el path auth y loadchilren
  // para que cargue el respectivo nombre.
  // hace una promesa hasta que cargan los hijos
  // y luego importa el modulo auth.module
  // porque alli estan definidos los componentes.

  {

    path: 'auth',
    loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule)

  },

  {

    path: 'heroes',
    loadChildren: () => import ('./heroes/heroes.module').then(m => m.HeroesModule)

  },

  {

    path: '404',
    component: ErrorPageComponent

  },

  {

    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'

  }

]


@NgModule({
  
  imports: [
    RouterModule.forRoot (routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
