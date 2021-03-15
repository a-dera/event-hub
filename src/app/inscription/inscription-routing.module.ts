import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionPage } from './inscription.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionPageRoutingModule {}
