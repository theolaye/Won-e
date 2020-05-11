import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ParametersModule } from './parameters/parameters.module';
import { PlanningModule } from './planning/planning.module';
import { ProfilModule } from './profil/profil.module';
import { WorkdayModule } from './workday/workday.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ParametersModule,
    PlanningModule,
    ProfilModule,
    WorkdayModule
  ]
})
export class ProtectedModule { }
