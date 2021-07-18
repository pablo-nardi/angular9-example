import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoService } from './todo.service';
import { StatsComponent } from './stats/stats.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoReactiveFormComponent } from './todo-reactive-form/todo-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoAppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoFooterComponent,
    StatsComponent,
    TodoReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
