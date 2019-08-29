import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesmenusComponent } from './opcionesmenus.component';

describe('OpcionesmenusComponent', () => {
  let component: OpcionesmenusComponent;
  let fixture: ComponentFixture<OpcionesmenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionesmenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionesmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
