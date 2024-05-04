import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, title: 'Home' },
  { path: 'todos', component: TodosComponent, title: 'ToDos' },
  { path: 'todos/:id', component: TodoDetailsComponent, title: 'To Do Details' },
  { path: 'contact-us', component: ContactUsComponent, title: 'Contact Us' },
  { path: 'about-us', component: AboutUsComponent, title: 'About Us' },
  { path: '**', component: NotFoundComponent, title: 'Not Found' },

];
