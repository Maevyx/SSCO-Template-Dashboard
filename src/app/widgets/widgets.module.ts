import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Main Component
import { ServiceStatusWidgetComponent } from './service-status-widget/service-status-widget.component';
import { WatchdogMainTableWidgetComponent } from './watchdog-main-table-widget/watchdog-main-table-widget.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ServiceStatusWidgetComponent,
    WatchdogMainTableWidgetComponent],
  exports: [
    ServiceStatusWidgetComponent,
    WatchdogMainTableWidgetComponent]
})
export class WidgetsModule { }
