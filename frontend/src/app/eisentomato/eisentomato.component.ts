import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ListService} from "../list.service";
import {List} from "./list";
import {ActivatedRoute, Params} from "@angular/router";
import {Coordinate} from "../shared/coordinate.model";
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-eisentomato',
  templateUrl: './eisentomato.component.html',
  styleUrls: ['./eisentomato.component.scss']
})
export class EisentomatoComponent implements OnInit {

  lists: List[];
  activeList: List;
  moved2: any;

  constructor(private listService: ListService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.lists = this.listService.getLists();

    //[ngStyle]="{'left.px': task.coordinate.x, 'top.px': task.coordinate.y}"
    //[ngStyle]="{'left.px': task.coordinate.x, 'top.px': task.coordinate.y}"

    this.route.params
      .subscribe(
        (params: Params) => {
          this.setList(+params['id']);
        }
      );
  }

  /*
  public ngAfterViewInit() {
    this.initTasks();
  }

  public initTasks() {
    console.log(this.activeList.tasks.length);

    this.activeList.tasks.map((task: Task) => {
      console.log(task);
      console.log('jaa');
      console.log(document.getElementById(task.uuid));
      console.log('jaaXX');

      document.getElementById(task.uuid).style.left = `${task.coordinate.x}.px`;
      document.getElementById(task.uuid).style.top = `${task.coordinate.y}.px`;
    })
  }*/

  public setList(listIndex: number) {
    if (listIndex) {
      this.activeList = this.listService.getList(listIndex);
    } else {
      this.activeList = this.listService.getList(0);
    }
  }

  public getQuadrantTasks(quadrant: number) {
    return this.activeList.tasks.filter(task => task.quadrant === quadrant);
  }

  public movedElement(event: any) {
    this.moved2 = event;
  }

  public updateTaskPosition(uuid: string, position: Coordinate) {
    this.listService.updateTask(0, uuid, position);
  }

  public draggedElement(event: any) {
    // console.log(document.getElementById('58a4c892-8cba-11eb-8dcd-0242ac130001').offsetTop);


    event.source.getRootElement().style.transform = "translate3d( 0, 0, 0)";
    this.updateTaskPosition(event.source.getRootElement().id, event.source.getFreeDragPosition())

    /*
       [ngStyle]="{'left.px': task.coordinate.x, 'top.px': task.coordinate.y}"
       [ngStyle]="{'transform': 'translate(' + task.coordinate.x + 'px, ' + task.coordinate.y + 'px)'}"
     */

    //const rect = element.getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);

    // console.log(document.getElementById('58a4c892-8cba-11eb-8dcd-0242ac130001').offsetTop);
    // console.log(document.getElementById('58a4c892-8cba-11eb-8dcd-0242ac130001').offsetLeft);

    // console.log(event.distance.x);
    // console.log(event.distance.y);
    console.log(document.elementsFromPoint(this.moved2.pointerPosition.x, this.moved2.pointerPosition.y)[2].id);
  }

  public dropped(event: any) {
    console.log(event.distance);
    console.log(event.source.element.nativeElement.offsetParent.id);
    console.log(event.source);
    // console.log(event.previousContainer);
    // console.log(event.container);
  }
}
