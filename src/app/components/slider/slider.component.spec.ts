import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct blank label', () => {
    const selectBtnDe = fixture.debugElement.query(
      By.css('.custom-control-label')
    );
    const selectBtnEl = selectBtnDe.nativeElement;
    const content = selectBtnEl.textContent;
    expect(content.trim()).toEqual('');
  });

  it('should display correct label', () => {
    component.title = "Facebook"
    fixture.detectChanges();
    const selectBtnDe = fixture.debugElement.query(
      By.css('.custom-control-label')
    );
    const selectBtnEl = selectBtnDe.nativeElement;
    const content = selectBtnEl.textContent;
    expect(content.trim()).toEqual('Facebook');
  });
});
