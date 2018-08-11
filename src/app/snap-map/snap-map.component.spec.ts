import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapMapComponent } from './snap-map.component';

describe('SnapMapComponent', () => {
  let component: SnapMapComponent;
  let fixture: ComponentFixture<SnapMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
