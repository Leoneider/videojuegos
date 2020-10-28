import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuegoEditPage } from './juego-edit.page';

const routes: Routes = [
  {
    path: '',
    component: JuegoEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegoEditPageRoutingModule {}
