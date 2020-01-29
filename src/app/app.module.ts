import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Root Component
import { AppComponent } from './app.component';

//Feature Modules
import { DashboardsModule } from './dashboards/dashboards.module';

//Components
import { ToolsComponent } from './tools/tools.component';
import { WatchdogComponent } from './watchdog/watchdog.component';
import { DocsComponent } from './docs/docs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardsModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    AppComponent,
    ToolsComponent,
    WatchdogComponent,
    DocsComponent,
    PageNotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
