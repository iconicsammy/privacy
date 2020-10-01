import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { CookieConsentComponent } from './cookie-consent.component';
import { ConsentDetailComponent } from '../consent-detail/consent-detail.component';
import { SliderComponent } from '../slider/slider.component';
import { ApiService } from '@services/api.service';
import { ConsentContent, ConsentDetail } from '@interfaces/interface-consent-content';

export class MockApiService extends ApiService {
  public getConstentsList(): Promise<ConsentContent> {
    const accordians: ConsentDetail = {
      "Localization":"en",
      "CategoyId":1,
      "CategoyHeading":"heading",
      "IsMandatory":false,
      "CategoyText":"note.",
      "PluginList":
      [
          {
          "ComplianceType":"CType",
          "ComplianceTypeID":78,
          "BlockingEnabled":false,
          "PluginDomain":"ctype.net",
          "cName":"both"
        }
      ]
      }

    
    const data : ConsentContent = {
      BannerId : 1,
      accordian :[accordians],
      Created: new Date(),
      LastUpdated: new Date()
    };
    return new Promise(function(resolve, reject) {
      resolve(data);
    });
    
  }

}


describe('CookieConsentComponent', () => {
  let component: CookieConsentComponent;
  let fixture: ComponentFixture<CookieConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [CookieConsentComponent, ConsentDetailComponent, SliderComponent],
      providers: [
        { provide: ApiService, useClass: MockApiService }
      ],
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookieConsentComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
