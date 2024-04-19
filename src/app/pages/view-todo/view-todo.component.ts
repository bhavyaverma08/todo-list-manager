import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrl: './view-todo.component.css',
})
export class ViewTodoComponent {
  sharedData: any; // Adjust the type according to the data structure from SharedDataService

  constructor(public sharedDataService: SharedDataService) {
    // Retrieve data from SharedDataService when component initializes
    this.sharedData = SharedDataService.myTodoArray;
  }

  ngOnInit(): void {
  }
}
