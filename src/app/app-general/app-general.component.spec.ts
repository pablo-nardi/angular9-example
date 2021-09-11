import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGeneralComponent } from './app-general.component';

describe('AppGeneralComponent', () => {
  let component: AppGeneralComponent;
  let fixture: ComponentFixture<AppGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
