import { Component } from '@angular/core';
import { SharedDataService } from './services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-list-manager';
  constructor() {}
  updateArray(newValue: any[]) {
    SharedDataService.myTodoArray = newValue;
  }
}
