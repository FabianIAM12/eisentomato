import {Component} from '@angular/core';
import {TodoDataService} from '../todo/todo-data.service';

@Component({
  selector: 'app-delement',
  templateUrl: 'delement.html',
  styleUrls: ['delement.scss'],
  providers: [TodoDataService]
})
export class DelementComponent {}
