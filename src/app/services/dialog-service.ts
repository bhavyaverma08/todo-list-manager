import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TodoDetailsPopUpComponent } from '../components/todo-details-pop-up/todo-details-pop-up.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(todoData: any) {
    console.log("todoData,",todoData)
    const dialogRef = this.dialog.open(TodoDetailsPopUpComponent, {
        data: todoData // Pass the todo data as data to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result - service : ${result}`);
    });
  }
}
