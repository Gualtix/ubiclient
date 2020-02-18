import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbiquiComponent } from './ubiqui.component';

describe('UbiquiComponent', () => {
  let component: UbiquiComponent;
  let fixture: ComponentFixture<UbiquiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbiquiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbiquiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
