import {Component, OnInit} from '@angular/core';
import {ListService} from "../list.service";
import {List} from "./list";
import {ActivatedRoute, Params} from "@angular/router";
import {CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-eisentomato',
  templateUrl: './eisentomato.component.html',
  styleUrls: ['./eisentomato.component.scss']
})
export class EisentomatoComponent implements OnInit {
  q0 = [];
  q1 = [];
  q2 = [];
  q3 = [];

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  lists: List[];
  activeList: List;

  constructor(private listService: ListService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lists = this.listService.getLists();

    this.route.params
      .subscribe(
        (params: Params) => {
          this.setList(+params['id']);
        }
      );
  }

  public setList(listIndex: number) {
    if (listIndex) {
      this.activeList = this.listService.getList(listIndex);
    } else {
      this.activeList = this.listService.getList(0);
    }
  }

  public test(event: any) {
    //console.log(event.element.nativeElement.offsetParent);
  }

  public dropped(event: any) {
    console.log(event.distance);
    console.log(event.source.element.nativeElement.offsetParent.id);
    console.log(event.source);
    // console.log(event.previousContainer);
    // console.log(event.container);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('---');
    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
