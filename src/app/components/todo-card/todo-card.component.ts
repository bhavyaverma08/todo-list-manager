import { Component, Input } from '@angular/core';
import { DialogService } from '../../services/dialog-service';

@Component({
  selector: 'todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.css',
})
export class TodoCardComponent {
  @Input() todo: any; // Define an input property to receive the todo object from the parent component
  @Input() sharedData: any;
  ngOnInit(): void {}

  constructor(private dialogService: DialogService) {}

  openDialog(clickedTodo: any) {
    this.dialogService.openDialog(clickedTodo);
  }
}
