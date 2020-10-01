import {
  TestBed,
  async,
  fakeAsync,
  tick,
  flushMicrotasks
} from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ConsentContent, ConsentDetail } from '@interfaces/interface-consent-content';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [
        ApiService
      ],
    }).compileComponents();
    service = TestBed.inject(ApiService);
    // Inject the http service and test controller for each test
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(function () {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get list of consents', fakeAsync(() => {

    const accordians: ConsentDetail = {
      "Localization":"en",
      "CategoyId":1,
      "CategoyHeading":"heading",
      "IsMandatory":false,
      "CategoyText":"note.",
      "PluginList":[
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

    service.getConstentsList().then((result) => {
      expect(result).toEqual(data);
      flushMicrotasks();
    });
    tick();

    // Expect a call to this URL
    const req = httpTestingController.expectOne('https://fast-lowlands-95849.herokuapp.com/api/common/getBanner');
    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');
    // Respond with this data when called
    req.flush(data);
  }));

});
