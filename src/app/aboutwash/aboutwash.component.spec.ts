import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutwashComponent } from './aboutwash.component';

describe('AboutwashComponent', () => {
  let component: AboutwashComponent;
  let fixture: ComponentFixture<AboutwashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutwashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutwashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
