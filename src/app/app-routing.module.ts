import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { ViewTodoComponent } from './pages/view-todo/view-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home - Todo Manager' },
  { path: 'add', component: AddTodoComponent, title: 'Add - Todo Manager' },
  { path: 'view', component: ViewTodoComponent, title: 'View - Todo Manager' },
  {
    path: 'update',
    component: UpdateTodoComponent,
    title: 'Update - Todo Manager',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
