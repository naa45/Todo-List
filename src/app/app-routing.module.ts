import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { MenuComponent } from './menu/menu.component';
import { FootageComponent } from './footage/footage.component';

const routes: Routes = [
  { path: '', component: LoginComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component:WelcomeComponent },
  { path: 'todos', component:ListTodoComponent },
  { path: 'menu', component:MenuComponent },
  { path: 'footer', component:FootageComponent },


  {path: '**', component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
