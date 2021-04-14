import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EventDetailUserPageRoutingModule } from './event-detail-user-routing.module';

import { EventDetailUserPage } from './event-detail-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EventDetailUserPageRoutingModule
  ],
  declarations: [EventDetailUserPage]
})
export class EventDetailUserPageModule {}
