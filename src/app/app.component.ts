import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title: string = 'todo-app';
  todoArray: Array<string> = [];

  addTodo(value) {
    this.todoArray.push(value)
  }

  deleteItem(todo) {
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
  }
  todoSubmit(value: any) {
    if (value !== "") {
      this.todoArray.push(value.todo)
    } else {
      alert('Field required **')
    }
  }
}


