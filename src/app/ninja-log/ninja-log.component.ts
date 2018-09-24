import { Component, OnInit } from '@angular/core';
import { GoldService } from '../gold.service';

@Component({
  selector: 'app-ninja-log',
  templateUrl: './ninja-log.component.html',
  styleUrls: ['./ninja-log.component.css']
})
export class NinjaLogComponent implements OnInit {

  constructor(private _goldService: GoldService) { }

  ngOnInit() {
  }

}
