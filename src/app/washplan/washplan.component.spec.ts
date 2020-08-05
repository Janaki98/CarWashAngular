import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashplanComponent } from './washplan.component';

describe('WashplanComponent', () => {
  let component: WashplanComponent;
  let fixture: ComponentFixture<WashplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
