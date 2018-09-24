import { Injectable } from '@angular/core';
import { Room } from './models/room';

@Injectable({
  providedIn: 'root'
})
export class GoldService {

  gold: number = 0;
  rooms: Room[] = [];

  constructor() {
    this.rooms.push(new Room('Farm', 2, 5));
    this.rooms.push(new Room('Cave', 5, 10));
    this.rooms.push(new Room('Casino', -100, 100));
    this.rooms.push(new Room('House', 7, 15));
  }

  retrieveGold(): number {
    return this.gold;
  }

  retrieveRooms(): Room[] {
    return this.rooms
  }

  addGold(amount: number): void {
    this.gold += amount;
  }
}
