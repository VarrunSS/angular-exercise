import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

import { GameRoutingModule } from './game-routing.module';

import { GameComponent } from './game.component';
import { GridChildComponent } from "./grid-child/grid-child.component";
import { ListChildComponent } from "./list-child/list-child.component";
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    GameComponent,
    GridChildComponent,
    ListChildComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,    
    SharedModule,
    GameRoutingModule
  ]
})
export class GameModule { }