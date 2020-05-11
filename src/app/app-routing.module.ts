import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home/home.component';
import { RechercherComponent } from './rechercher/rechercher.component';
import { AproposComponent } from './apropos/apropos.component';
import { LogComponent } from './log/log.component';
import { AddComponent } from './rechercher/add/add.component';
import { EditComponent } from './rechercher/edit/edit.component';
import { ListComponent } from './rechercher/list/list.component';

const routes: Routes = [

  {
    path: 'add',
    component: AddComponent,
    data: { title: 'Ajouter' }
  },
  {
    path: 'edit',
    component: EditComponent,
    data: { title: 'editer' }
  },
  {
    path: 'list',
    component: ListComponent,
    data: { title: 'lister' }
  },



  {path:'rechercher',
component: RechercherComponent
},
{path:'log',
component: LogComponent
},
{path:'apropos',
component:AproposComponent
},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
