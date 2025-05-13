import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localeES from '@angular/common/locales/es-MX';
import localeFr from '@angular/common/locales/fr';
import { LocalService } from './services/locale.service';

registerLocaleData(localeES, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    {
      provide: LOCALE_ID,
      /* useValue: 'es', */
      deps: [LocalService],
      useFactory: (localeService: LocalService) => localeService.getLocale,
    },
  ],
};
