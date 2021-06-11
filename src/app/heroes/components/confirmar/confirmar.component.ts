import { Heroe } from './../../interfaces/heroes.interface';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Heroe )  { }

              // El Inject es para pasar la informacion desde el componente donde se usa 
              // la ventana y aca recibe la info.

  ngOnInit(): void {
    
  }

  borrar(){
    this.dialogRef.close(true)
  }

  cerrar() {
    this.dialogRef.close()
  }

}
