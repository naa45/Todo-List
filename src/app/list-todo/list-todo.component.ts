import { Component } from '@angular/core';
// a class to represent todo stucture
export class Todo{
  constructor(
    public id: number,
    public description: string,
    public Done: boolean,
    public targetDate: Date
  ){

  }
}
@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent  {

  todos = [
    new Todo(1,'Learn to dance',false, new Date()),
    new Todo(2,'Learn to cook',false, new Date()),
    new Todo(3,'Learn to eat',false, new Date())

];

  constructor() { }

  

}
