import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjaRoomComponent } from './ninja-room.component';

describe('NinjaRoomComponent', () => {
  let component: NinjaRoomComponent;
  let fixture: ComponentFixture<NinjaRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjaRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjaRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
