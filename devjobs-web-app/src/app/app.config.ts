import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { AllJobsService } from './service/all-jobs.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
    [provideHttpClient(), AllJobsService], provideAnimationsAsync()
  ]
};
