import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoldService } from '../gold.service';
import { Room } from '../models/room';

@Component({
  selector: 'app-ninja-room',
  templateUrl: './ninja-room.component.html',
  styleUrls: ['./ninja-room.component.css']
})
export class NinjaRoomComponent implements OnInit {

  @Input()
  room: Room;
  @Output()
  goldUpdated = new EventEmitter();

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

  earnGold() {
    this._goldService.addGold(this.room.name, this.room.randomGold());
    this.goldUpdated.emit();
  }

}
