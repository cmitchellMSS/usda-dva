import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsPanelComponent } from './locations-panel.component';

describe('LocationsPanelComponent', () => {
  let component: LocationsPanelComponent;
  let fixture: ComponentFixture<LocationsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
