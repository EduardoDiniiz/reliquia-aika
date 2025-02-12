import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { RelicsListComponent } from './components/relics-list/relics-list.component';
import { DatePipe } from '@angular/common';

const routes = [
  { path: '', component: RelicsListComponent },
  { path: 'about', component: RelicsListComponent },
  { path: '**', redirectTo: '' }
];

export const appConfig: ApplicationConfig = {
  providers: [DatePipe, importProvidersFrom(RouterModule.forRoot(routes)), provideHttpClient(), provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
