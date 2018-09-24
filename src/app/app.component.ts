import { Component, OnInit } from '@angular/core';
import { GoldService } from './gold.service';
import { Room } from './models/room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  gold: number;
  rooms: Room[] = [];

  constructor(private _goldService: GoldService) {}

  ngOnInit() {
    this.gold = this._goldService.retrieveGold();
    this.rooms = this._goldService.retrieveRooms();
  }

  goldChanged() {
    this.gold = this._goldService.retrieveGold();
  }
}
