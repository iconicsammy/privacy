import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsentDetailComponent } from './components/consent-detail/consent-detail.component';
import { SliderComponent } from './components/slider/slider.component';
import {
  HttpClientModule
} from '@angular/common/http';

import { ApiService } from '@services/api.service'

@NgModule({
  declarations: [
    AppComponent,
    CookieConsentComponent,
    ConsentDetailComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
