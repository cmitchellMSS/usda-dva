import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TellSonnyModalComponent } from './tell-sonny-modal.component';

describe('TellSonnyModalComponent', () => {
  let component: TellSonnyModalComponent;
  let fixture: ComponentFixture<TellSonnyModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TellSonnyModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TellSonnyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
