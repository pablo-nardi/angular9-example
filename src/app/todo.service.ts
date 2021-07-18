import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { TodoItem } from './model/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  list = [];
  lastItemId = 0;

  constructor(private storage: LocalStorageService) { }
  
  add(task) {
    const id = this.lastItemId;
    task.id = id;
    this.list.push(task);
    this.lastItemId += 10;
  }

  editTask(task: TodoItem){
    for (let i = 0; i < this.list.length; i++) {
      if(this.list[i].id === task.id){
        console.log('se encontro la tarea')
        this.list[i].description = task.description;
        this.list[i].isCompleted = task.isCompleted;
        break
      }
      
    }
  }

  remove(id) {
    const index = this.list.findIndex((element) => element.id === id);
    this.list.splice(index, 1);
  }

  incompletedSize() {
    return this.list.filter(item => !item.isCompleted).length;

  }
  completedSize() {
    return  this.list.filter(item => item.isCompleted).length ;
  }

  getName() {
    return 'TodoService 123' + this.storage.getName();
  }
}
