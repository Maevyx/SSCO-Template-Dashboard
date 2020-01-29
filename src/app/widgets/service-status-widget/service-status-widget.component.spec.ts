import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStatusWidgetComponent } from './service-status-widget.component';

describe('ServiceStatusWidgetComponent', () => {
  let component: ServiceStatusWidgetComponent;
  let fixture: ComponentFixture<ServiceStatusWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStatusWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStatusWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
