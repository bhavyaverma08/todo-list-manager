import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-details-pop-up',
  templateUrl: './todo-details-pop-up.component.html',
  styleUrl: './todo-details-pop-up.component.css',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class TodoDetailsPopUpComponent {
  @Input() selectedTodo: any; // Declare selectedTodo as an input property
  @Input() todoData: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    console.log('Inside pop-up:3', this.data); // Access the selected todo data here
  }
}
