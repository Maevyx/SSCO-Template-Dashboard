import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardV1Component } from './dashboards/dashboard-v1/dashboard-v1.component';
import { ToolsComponent } from './tools/tools.component';
import { WatchdogComponent } from './watchdog/watchdog.component';
import { DocsComponent } from './docs/docs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardV1Component },
  { path: 'tools', component: ToolsComponent },
  { path: 'watchdog', component: WatchdogComponent },
  { path: 'docs', component: DocsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
