import {Component} from '@angular/core';
import {TodoDataService} from '../todo/todo-data.service';

@Component({
  selector: 'app-eisenhower',
  templateUrl: 'eisenhower.html',
  styleUrls: ['eisenhower.scss'],
  providers: [TodoDataService]
})
export class EisenhowerComponent {

  constructor(public todoDataService: TodoDataService) {}



  get todos() {
    return ['blablabla', 'blablabla', 'blablabla'];
  }
}
