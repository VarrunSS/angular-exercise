import { Component, OnInit } from '@angular/core';
import { ShuffleArray } from 'src/app/core/functions';
import { IGameControl } from 'src/app/core/models';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, IGameControl {

  isShuffled: Boolean;
  isSorted: Boolean;

  elements: number[] = [];

  constructor() {
    this.isShuffled = true;
    this.isSorted = false;
  }

  ngOnInit(): void {
    for (let ind = 0; ind < 9; ind++)
      this.elements.push(ind + 1);
    this.shuffle();
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
