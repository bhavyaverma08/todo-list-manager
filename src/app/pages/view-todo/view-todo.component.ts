import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { MatDialog } from '@angular/material/dialog';
import { TodoDetailsPopUpComponent } from '../../components/todo-details-pop-up/todo-details-pop-up.component';
@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrl: './view-todo.component.css',
})
export class ViewTodoComponent {
  sharedData: any; // Adjust the type according to the data structure from SharedDataService
  selectedTodo: any; // Define a property to store the selected todo
  constructor(
    public sharedDataService: SharedDataService,
    public dialog: MatDialog
  ) {
    // Retrieve data from SharedDataService when component initializes
    this.sharedData = SharedDataService.myTodoArray;
  }

  ngOnInit(): void {}

  openDialog(todo: any): void {
    this.selectedTodo = todo; // Store the selected todo
    this.dialog.open(TodoDetailsPopUpComponent, {
      // Configuration options for your dialog
      // For example:
      width: '400px',
      data: todo, // Pass the selected todo data to the dialog
    });
  }
}
