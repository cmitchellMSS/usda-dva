import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellSonnyLocationModalComponent } from './tell-sonny-location-modal.component';

describe('TellSonnyLocationModalComponent', () => {
  let component: TellSonnyLocationModalComponent;
  let fixture: ComponentFixture<TellSonnyLocationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellSonnyLocationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellSonnyLocationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
