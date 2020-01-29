import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardV1Component } from './dashboard-v1/dashboard-v1.component';
//import { DashboardV2Component } from './dashboard-v2/dashboard-v2.component';
//import { DashboardV3Component } from './dashboard-v3/dashboard-v3.component';

//Features Module 
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetsModule
  ],
  declarations: [
    DashboardV1Component, 
    //DashboardV2Component, 
    //DashboardV3Component
  ],
  exports: [
    DashboardV1Component
  ]
})
export class DashboardsModule { }
