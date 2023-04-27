import { NgModule } from '@angular/core';

// lo unico que se va a hacer aca es exortar los
// modulos de angular material para ser usados

// autocomplete
import {MatAutocompleteModule} from '@angular/material/autocomplete';
// button
import {MatButtonModule} from '@angular/material/button';
//card
import {MatCardModule} from '@angular/material/card';
// grid
import {MatGridListModule} from '@angular/material/grid-list';
//form field para autocomplete
import { MatFormFieldModule } from '@angular/material/form-field';
//input para autocomplete
import { MatInputModule } from '@angular/material/input'
// list
import {MatListModule} from '@angular/material/list';
// icon
// https://fonts.google.com/icons
import {MatIconModule} from '@angular/material/icon';
//select
import {MatSelectModule} from '@angular/material/select';
// navegacion lateral
import {MatSidenavModule} from '@angular/material/sidenav';
// spinner
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// barra de herramientas
import {MatToolbarModule} from '@angular/material/toolbar';





@NgModule({

  exports: [

    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatToolbarModule  

  ]
})
export class MaterialModule { }
