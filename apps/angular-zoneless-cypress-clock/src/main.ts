import { AppComponent } from './app/app.component';
import { NxWelcomeComponent } from './app/nx-welcome.component';
import { appRoutes } from './app/app.routes';
import { NgModule, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule, NxWelcomeComponent, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [provideExperimentalZonelessChangeDetection()]
}) class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: 'noop' })
  .catch((err) => console.error(err));
