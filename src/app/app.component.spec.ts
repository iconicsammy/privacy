import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CookieConsentComponent } from './components/cookie-consent/cookie-consent.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ConsentDetailComponent } from './components/consent-detail/consent-detail.component';
import { SliderComponent } from './components/slider/slider.component';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FontAwesomeModule
      ],
      declarations: [
        AppComponent,
        CookieConsentComponent,
        SliderComponent,
        ConsentDetailComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
