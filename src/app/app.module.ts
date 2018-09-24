import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NinjaRoomComponent } from './ninja-room/ninja-room.component';
import { NinjaLogComponent } from './ninja-log/ninja-log.component';

import { GoldService } from './gold.service';

@NgModule({
  declarations: [
    AppComponent,
    NinjaRoomComponent,
    NinjaLogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
