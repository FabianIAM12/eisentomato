import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ListService} from "../list.service";
import {List} from "./list";
import {ActivatedRoute, Params} from "@angular/router";
import {Coordinate} from "../shared/coordinate.model";
import {Task} from '../shared/task.model';
import {CdkDragEnd} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-eisentomato',
  templateUrl: './eisentomato.component.html',
  styleUrls: ['./eisentomato.component.scss']
})
export class EisentomatoComponent implements OnInit {

  lists: List[];
  activeList: List;

  constructor(private route: ActivatedRoute,
              private listService: ListService) { }

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
  */

  movedElement() {
    console.log();
  }

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

  public draggedElement(event: CdkDragEnd) {
    /*
    // console.log(document.getElementById('58a4c892-8cba-11eb-8dcd-0242ac130001').offsetTop);

    const { offsetLeft, offsetTop } = event.source.element.nativeElement;
    const { x, y } = event.distance;

    console.log(x, y);
    //this.positionX = offsetLeft + x;
    //this.positionY = offsetTop + y;


    // event.source.getRootElement().style.transform = "translate3d( 0, 0, 0)";
    this.updateTaskPosition(event.source.getRootElement().id, event.source.getFreeDragPosition())

    /*
       [ngStyle]="{'left.px': task.coordinate.x, 'top.px': task.coordinate.y}"
       [ngStyle]="{'transform': 'translate(' + task.coordinate.x + 'px, ' + task.coordinate.y + 'px)'}"
     */
  }
}
