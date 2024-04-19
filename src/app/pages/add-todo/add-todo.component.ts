import { Component } from '@angular/core';
import { ParentTodo } from '../../../model/todo';
import { SharedDataService } from '../../services/shared-data.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css',
})
export class AddTodoComponent {
  mytodo = new ParentTodo();

  isTodoValid() {
    if (this.mytodo.title === '') return false;
    else return true;
  }
  handleReset(event: Event) {
    event.preventDefault();
    this.mytodo = new ParentTodo();
  }
  submitForm(event: Event) {
    // Changed FormDataEvent to Event
    event.preventDefault();
    this.mytodo.id = uuidv4();
    if (!this.isTodoValid()) {
      alert('Please enter some title to your TODO');
      return;
    }
    console.log(this.mytodo);
    const newValue = [...SharedDataService.myTodoArray, { ...this.mytodo }];
    SharedDataService.myTodoArray = newValue;
    this.mytodo = new ParentTodo();
  }
}
