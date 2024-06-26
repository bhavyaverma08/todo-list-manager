import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AddTodoComponent } from './pages/add-todo/add-todo.component';
import { ViewTodoComponent } from './pages/view-todo/view-todo.component';
import { UpdateTodoComponent } from './pages/update-todo/update-todo.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { TodoDetailsPopUpComponent } from './components/todo-details-pop-up/todo-details-pop-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AddTodoComponent,
    ViewTodoComponent,
    UpdateTodoComponent,
    TodoCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule,TodoDetailsPopUpComponent,MatDialogModule],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  myTodoArray: any[] = [];
}
