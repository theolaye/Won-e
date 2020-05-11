import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
// tslint:disable-next-line: import-spacing
import { Extrait }  from  '../extrait.model';
import {Exemplaire} from '../exemplaire.model';
@Component({
  selector: 'al-rechercher',
  templateUrl: './rechercher.component.html',
  styleUrls: ['./rechercher.component.scss']
})
export class RechercherComponent implements OnInit {
  exemplaire:Exemplaire[]=[
    {id:1},
    {id:2},
    {id:3},
    {id:4},
    {id:5}
  ];
extrait: Extrait[] = [
  {
    id: 22144,
    pere: 'string',
    mere: 'mero',
    beneficiaire: 'fall',
    agent: 'falou',
  },
  {
    id: 224,
    pere: 'momo',
    mere: 'mendes',
    beneficiaire: 'sall',
    agent: 'bondia',
  }
];

  constructor() { }

  ngOnInit(): void {
  }
  saveExtrait(extrForm: NgForm): void{
    console.log(extrForm.value);
  }

    }



