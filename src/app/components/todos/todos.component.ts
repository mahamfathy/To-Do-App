import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../Models/to-do';
import { ToDoService } from '../../Services/to-do.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent implements OnInit {
  todos: ToDo[] = [];
  newTodo: ToDo = {} as ToDo;
  constructor(private todoService: ToDoService) {}
  ngOnInit(): void {
    this.getTodos();
  }
  getTodos() {
    this.todoService.getTodos().subscribe((allTodos) => {
      this.todos = allTodos;
    });
  }
  createTodo():void {
    const newTodo1 = {id:this.newTodo.id,title:this.newTodo.title,completed:false}
    this.newTodo = newTodo1
    this.todoService.createToDo(newTodo1).subscribe(todo=>{
      this.todos.push(todo)
    })
  }
}
