import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { MenuComponent } from './menu/menu.component';
import { FootageComponent } from './footage/footage.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent, },//canActivate, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component:WelcomeComponent, canActivate:[RouteGuardService] },
  { path: 'todos', component:ListTodoComponent, canActivate:[RouteGuardService]},
  { path: 'menu', component:MenuComponent, canActivate:[RouteGuardService] },
  { path: 'footer', component:FootageComponent, canActivate:[RouteGuardService] },
  { path: 'logout', component:LogoutComponent, canActivate:[RouteGuardService] },


  { path: '**', component:ErrorComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
