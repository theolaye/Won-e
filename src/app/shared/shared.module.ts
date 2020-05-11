import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // Ajouter l’exportation suivante : 
   exports: [ 
       CommonModule 
     ]
})
export class SharedModule { }
