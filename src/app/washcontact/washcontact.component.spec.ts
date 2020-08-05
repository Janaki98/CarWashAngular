import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashcontactComponent } from './washcontact.component';

describe('WashcontactComponent', () => {
  let component: WashcontactComponent;
  let fixture: ComponentFixture<WashcontactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashcontactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
