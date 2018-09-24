import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaLogComponent } from './ninja-log.component';

describe('NinjaLogComponent', () => {
  let component: NinjaLogComponent;
  let fixture: ComponentFixture<NinjaLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
