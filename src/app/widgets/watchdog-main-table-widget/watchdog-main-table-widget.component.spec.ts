import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchdogMainTableWidgetComponent } from './watchdog-main-table-widget.component';

describe('WatchdogMainTableWidgetComponent', () => {
  let component: WatchdogMainTableWidgetComponent;
  let fixture: ComponentFixture<WatchdogMainTableWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchdogMainTableWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchdogMainTableWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
