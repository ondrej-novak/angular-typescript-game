/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoItem } from '../models/ToDoItem';
import { TodoService } from './todo.service';

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoService]
    });
  });

  it('should ...', inject([TodoService], (service: TodoService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoService], (service: TodoService) => {
      expect(service.getAll()).toEqual([]);
    }));

    it('should return all todos', inject([TodoService], (service: TodoService) => {
      let todo1: TodoItem = <TodoItem> { title: 'Hello 1', completed: false };
      let todo2: TodoItem = <TodoItem> { title: 'Hello 2', completed: true };
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
    }));

  });

  describe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoService], (service: TodoService) => {
      let todo1: TodoItem = <TodoItem> { title: 'Hello 1', completed: false };
      let todo2: TodoItem = <TodoItem> { title: 'Hello 2', completed: true };
      service.add(todo1);
      service.add(todo2);
      expect(service.getById(1)).toEqual(todo1);
      expect(service.getById(2)).toEqual(todo2);
    }));

  });

  describe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoService], (service: TodoService) => {
      let todo1: TodoItem = <TodoItem> { title: 'Hello 1', completed: false };
      let todo2: TodoItem = <TodoItem> { title: 'Hello 2', completed: true };
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
      service.delete(1);
      expect(service.getAll()).toEqual([todo2]);
      service.delete(2);
      expect(service.getAll()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoService], (service: TodoService) => {
      let todo1: TodoItem = <TodoItem> { title: 'Hello 1', completed: false };
      let todo2: TodoItem = <TodoItem> { title: 'Hello 2', completed: true };
      service.add(todo1);
      service.add(todo2);
      expect(service.getAll()).toEqual([todo1, todo2]);
      service.delete(3);
      expect(service.getAll()).toEqual([todo1, todo2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([TodoService], (service: TodoService) => {
      let todo: TodoItem = <TodoItem> { title: 'Hello 1', completed: false };
      service.add(todo);
      let updatedTodo = service.update(1, <TodoItem> {
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([TodoService], (service: TodoService) => {
      let todo: TodoItem = <TodoItem> { title: 'Hello 1', completed: false };
      service.add(todo);
      let updatedTodo = service.update(2, <TodoItem> {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));

  });

  describe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([TodoService], (service: TodoService) => {
      let todo: TodoItem = <TodoItem> { title: 'Hello 1', completed: false };
      service.add(todo);
      let updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.completed).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.completed).toEqual(false);
    }));

  });

});