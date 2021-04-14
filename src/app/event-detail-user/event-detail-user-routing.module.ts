import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventDetailUserPage } from './event-detail-user.page';

const routes: Routes = [
  {
    path: '',
    component: EventDetailUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventDetailUserPageRoutingModule {}
