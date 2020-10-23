import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlquilerPageRoutingModule } from './alquiler-routing.module';

import { AlquilerPage } from './alquiler.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlquilerPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AlquilerPage]
})
export class AlquilerPageModule {}
