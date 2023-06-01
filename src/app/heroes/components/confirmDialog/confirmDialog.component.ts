import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmDialog',
  templateUrl: './confirmDialog.component.html',
})
export class ConfirmDialogComponent {
  // el constructor u onNoclick debe ir tal cual porque trae la data de un servicio
  // MAT_DIALOG_DATA es el token para saber cual es el servicio que estamos inyectando
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: Heroe
    ) { 
     console.log({data});
    }


    // en los metodos mando true o false dependiendo
    // de si se acepta o no
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}
