import {Component, OnInit} from '@angular/core';
import {ListService} from "../list.service";
import {List} from "./list";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-eisentomato',
  templateUrl: './eisentomato.component.html',
  styleUrls: ['./eisentomato.component.scss']
})
export class EisentomatoComponent implements OnInit {
  lists: List[];
  activeList: List;

  constructor(private listService: ListService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.lists = this.listService.getLists();

    this.route.params
      .subscribe(
        (params: Params) => {
          console.log(params);
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
      // this.router.navigate(['lists', 0], {relativeTo: this.route});
  }

  public dropped(event) {
    console.log(event);
  }
}
