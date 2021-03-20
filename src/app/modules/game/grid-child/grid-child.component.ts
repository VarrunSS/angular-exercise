import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShuffleArray } from 'src/app/core/functions/';
import { IGameControl } from 'src/app/core/models/';

@Component({
  selector: 'app-grid-child',
  templateUrl: './grid-child.component.html',
  styleUrls: ['./grid-child.component.scss']
})
export class GridChildComponent implements OnInit, IGameControl {
  // @Input() shuffle: Boolean;
  // @Input() sort: Boolean;
  // @Output() shuffled: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  // @Output() sorted: EventEmitter<Boolean> = new EventEmitter<Boolean>();

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
