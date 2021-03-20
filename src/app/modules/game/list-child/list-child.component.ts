import { Component, OnInit } from '@angular/core';
import { ShuffleArray } from 'src/app/core/functions';
import { IGameControl } from 'src/app/core/models/';

@Component({
  selector: 'app-list-child',
  templateUrl: './list-child.component.html',
  styleUrls: ['./list-child.component.scss']
})
export class ListChildComponent implements OnInit, IGameControl {

  isShuffled: Boolean;
  isSorted: Boolean;

  elements: number[] = [];

  constructor() {
    this.isShuffled = false;
    this.isSorted = true;
  }

  ngOnInit(): void {
    for (let ind = 0; ind < 9; ind++)
      this.elements.push(ind + 1);
  }

  sort() {
    this.elements = this.elements.sort();
    this.isSorted = true;
    this.isShuffled = false;
  }

  shuffle() {
    this.elements = ShuffleArray(this.elements);
    this.isSorted = false;
    this.isShuffled = true;
  }


}
