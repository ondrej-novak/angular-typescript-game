import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';
import { TodoItem } from './models/ToDoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private todoService: TodoService) {
  }

  newTodo: TodoItem = {} as TodoItem;
  checkAll: boolean = false;
  
  addTodo() {
    if (this.newTodo && this.newTodo.title && this.newTodo.title.length > 0)
    {
      this.todoService.add(this.newTodo);
      this.newTodo = {} as TodoItem;
    }    
  }

  removeTodo(todo) {
    this.todoService.delete(todo.id);
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  setAllComplete(checked: boolean){
    this.checkAll = !this.checkAll;
    this.todoService.toggleAllTodoComplete(this.checkAll);
  }

  get todos() {
    return this.todoService.getAll();
  }
  
}
