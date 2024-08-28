import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NbThemeModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbSidebarModule, NbMenuModule, NbToastrModule } from '@nebular/theme';
import { routes } from './app/app.routes';
import 'eva-icons';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      NbThemeModule.forRoot({ name: 'cosmic' }),
      NbDatepickerModule.forRoot(),
      NbDateFnsDateModule,
      NbDialogModule.forRoot(),
      NbIconModule,
      NbSidebarModule.forRoot(),
      NbMenuModule.forRoot(),
      NbToastrModule.forRoot(),
    )
  ],
}).catch(err => console.error(err));

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));
