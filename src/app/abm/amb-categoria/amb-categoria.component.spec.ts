import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbCategoriaComponent } from './amb-categoria.component';

describe('AmbCategoriaComponent', () => {
  let component: AmbCategoriaComponent;
  let fixture: ComponentFixture<AmbCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
