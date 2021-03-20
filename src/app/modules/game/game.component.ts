import { Component, OnInit, ViewChild } from '@angular/core';
import { GridChildComponent } from './grid-child/grid-child.component';

import { IGameControl } from 'src/app/core/models/';
import { ListChildComponent } from './list-child/list-child.component';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, IGameControl {
  // @ViewChild('grid', { static: true }) private gridChild: GridChildComponent;
  // @ViewChild('list', { static: true }) private listChild: ListChildComponent;

  @ViewChild('grid', { static: true }) private gridChild: DisplayComponent;
  @ViewChild('list', { static: true }) private listChild: DisplayComponent;

  disableSort: Boolean;
  disableShuffle: Boolean;

  constructor() {
    this.disableSort = false;
    this.disableShuffle = true;
  }

  ngOnInit(): void {
  }

  sort() {
    this.disableShuffle = false;

    if (!this.gridChild.isSorted)
      this.gridChild.sort();
    else if (!this.listChild.isSorted)
      this.listChild.sort();

    if (this.gridChild.isSorted && this.listChild.isSorted)
      this.disableSort = true;
  }

  shuffle() {
    this.disableSort = false;

    if (!this.gridChild.isShuffled)
      this.gridChild.shuffle();
    else if (!this.listChild.isShuffled)
      this.listChild.shuffle();

    if (this.gridChild.isShuffled && this.listChild.isShuffled)
      this.disableShuffle = true;
  }

}
