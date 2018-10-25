import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { UsersListComponent } from '@components/users-list/users-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
