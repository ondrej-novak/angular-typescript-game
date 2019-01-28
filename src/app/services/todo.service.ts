import { Injectable } from '@angular/core';
import { TodoItem } from '../models/ToDoItem';
import { TodoSort } from '../utils/todosort';

@Injectable()
export class TodoService {

  // Session Storage name for saved data
  private STORAGE_ID = 'todos-storage-allmighty-42';
  
  // Last id counter
  private lastId: number = 0;

  // Local for todo list - when initialized, get list from session storage
  private _todoList: TodoItem[] = JSON.parse(sessionStorage.getItem(this.STORAGE_ID) || '[]');
  private todoSort = new TodoSort();

  private sortNStore = () => {
    // sort list
    this._todoList= this.todoSort.mergeSort(this._todoList);
     // store list
    sessionStorage.setItem(this.STORAGE_ID, JSON.stringify(this._todoList));
  }

  // GET All stored items else empty
  getAll (): TodoItem[] {
    return this._todoList;
  }

  // GET /:id
  getById(id: number): TodoItem {    
    return this._todoList.filter
      (todo => todo.id === id)
      .pop();
  }

  // POST /
  add(todo: TodoItem) {
    
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    // add new item into list
    this._todoList.push(todo);
    
    this.sortNStore();
    return this;
  }

  // DELETE /:id
  delete(id: number): number {    
    this._todoList = this._todoList.filter(todo => todo.id !== id);   
    this.sortNStore();
    return id;
  }

  // PUT /:id
  update(id: number, values: TodoItem): TodoItem {

    const item = this._todoList.find((todo: TodoItem) => {
      if (todo.id === id)
      {
        Object.assign(todo, values);
        return true;
      }
      return false;
    });

    this.sortNStore();
      
    return item;
  }

  // Toggle todo complete
  toggleTodoComplete(todo: TodoItem) {
    let updatedTodo = this.update(todo.id, <TodoItem> {
      completed: !todo.completed
    });
    return updatedTodo;
  }

  toggleAllTodoComplete(isChecked: boolean) {
    for (var i = 0; i < this._todoList.length; i++){
      this._todoList[i].completed = isChecked;
    }
    this.sortNStore();
    return;
  }

}