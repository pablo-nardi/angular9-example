import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { LoginUserComponent } from './login-user/login-user.component';


const routes: Routes = [
  {path: 'login', component: LoginUserComponent},
  {path: 'list', component: ListUserComponent},
  {path: 'form/:mode/:userMail', component: EditUserComponent},
  {path: 'form', component: AddUserComponent},
  {path: '**', component: Component1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
