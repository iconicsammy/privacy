import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SliderComponent } from '../slider/slider.component';
import { ConsentDetail } from '@interfaces/interface-consent-content';
import { By } from '@angular/platform-browser';
import { ConsentDetailComponent } from './consent-detail.component';

describe('ConsentDetailComponent', () => {
  let component: ConsentDetailComponent;
  let fixture: ComponentFixture<ConsentDetailComponent>;
  const detail : ConsentDetail = {
    CategoyHeading : 'HEading',
    CategoyId : 1,
    CategoyText: 'text',
    Localization : 'en',
    IsMandatory : true
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentDetailComponent, SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentDetailComponent);
    component = fixture.componentInstance;
    component.consentDetail = detail;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should toggle constent details', () => {
    const togglerIcon = fixture.debugElement.query(
      By.css('.icons')
    );
    const icon = togglerIcon.nativeElement;
    const constentDetailBlock = fixture.debugElement.query(
      By.css('#consentDetailsBlock')
    );
    const eleConstentDetailBlock = constentDetailBlock.nativeElement;
    expect(eleConstentDetailBlock.getAttribute('class')).toEqual('collapse');
    icon.click();
    fixture.detectChanges();
    expect(eleConstentDetailBlock.getAttribute('class')).toEqual('');
  });
});
