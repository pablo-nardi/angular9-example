import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import {TodoItem} from '../model/todo-item'
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.scss']
})
export class TodoReactiveFormComponent implements OnInit {

  @Input() itemEdited: TodoItem = null;

  editFlag = false;
  valor:any = 'hola';
  form = new FormGroup({
    firstInput: new FormControl('',Validators.required),
    urlInput: new FormControl('',validaUrl)
  })

  constructor(private service: TodoService) { 
    this.form.valueChanges.subscribe(value=>{
      this.valor = value.firstInput;
    })
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.itemEdited){
      console.log('Se activó el ngOnChanges',this.itemEdited);
      this.form.patchValue({firstInput:this.itemEdited.description});
      this.editFlag = true;
    }
  }

  add(){
    if(this.itemEdited){
      console.log('Llamando a service.editTask task');
      this.itemEdited.description = this.form.value.firstInput;
      this.service.editTask(this.itemEdited);
      
      // LIMPIEZA
      this.itemEdited = null;
      this.editFlag = false;
      this.form.reset();

    }else{
      console.log('Llamando a service.add task');
      let item = new TodoItem();
      console.log('variable form', this.form.value);
      item.description = this.form.value.firstInput;
      item.isCompleted = false;
      this.service.add(item)
      this.form.reset();
    }
    
  }
}

export function validaUrl(control: AbstractControl){
  //if(control.value != ""){
    console.log('Valor del campo de url: ',control.value )
    if(!control.value.startsWith('https')){
      return { urlNoCorrecta: true };
    }
    //return null;
  //}
  
}
