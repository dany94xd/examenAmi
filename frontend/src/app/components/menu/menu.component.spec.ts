import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { menuComponent } from './menu.component';

describe('menuComponent', () => {
  let component: menuComponent;
  let fixture: ComponentFixture<menuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ menuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(menuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
