import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {List} from "../list";

@Component({
  selector: 'top-list',
  templateUrl: './top-list.component.html',
  styleUrls: ['./top-list.component.css']
})
export class TopListComponent implements OnInit {
  @Input() public lists: List[];
  @Output() emitList = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  setList(index: number){
    this.emitList.emit(index);
  }
}
