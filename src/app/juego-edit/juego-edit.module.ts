import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuegoEditPageRoutingModule } from './juego-edit-routing.module';

import { JuegoEditPage } from './juego-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuegoEditPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [JuegoEditPage]
})
export class JuegoEditPageModule {}
