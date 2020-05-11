import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RechercherComponent } from './rechercher/rechercher.component';
import { AproposComponent } from './apropos/apropos.component';
import { LogComponent } from './log/log.component';
import { ListUserComponent } from './log/list-user/list-user.component';
import { AddUserComponent } from './log/add-user/add-user.component';
import { EditUserComponent } from './log/edit-user/edit-user.component';
import { AddComponent } from './rechercher/add/add.component';
import { EditComponent } from './rechercher/edit/edit.component';
import { ListComponent } from './rechercher/list/list.component';




@NgModule({
  declarations: [
    AppComponent,
    RechercherComponent,
    AproposComponent,
    LogComponent,
    ListUserComponent,
    AddUserComponent,
    EditUserComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    

    AppRoutingModule,
    CoreModule
  ],
  providers: [    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
