import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { CvTimelineComponent } from './cv-timeline/cv-timeline.component';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CvAboutMeComponent } from './cv-about-me/cv-about-me.component';
import { CvProjectsComponent } from './cv-projects/cv-projects.component';
import { CvHobbiesComponent } from './cv-hobbies/cv-hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    UnderConstructionComponent,
    CvTimelineComponent,
    CvHeaderComponent,
    CvAboutMeComponent,
    CvProjectsComponent,
    CvHobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
