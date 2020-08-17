import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotacionesmiguelComponent } from './anotacionesmiguel.component';

describe('AnotacionesmiguelComponent', () => {
  let component: AnotacionesmiguelComponent;
  let fixture: ComponentFixture<AnotacionesmiguelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotacionesmiguelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotacionesmiguelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
