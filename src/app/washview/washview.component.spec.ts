import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashviewComponent } from './washview.component';

describe('WashviewComponent', () => {
  let component: WashviewComponent;
  let fixture: ComponentFixture<WashviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
