import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'Ready Player One!',
      complete: true
    });
    expect(todo.title).toEqual('Ready Player One!');
    expect(todo.complete).toEqual(true);
  });
});