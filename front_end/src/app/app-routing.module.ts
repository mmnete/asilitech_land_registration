import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponentComponent } from './pages/log-in-component/log-in-component.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchComponent } from './pages/search/search.component';
import { RegisterComponent } from './pages/register/register.component';
import {PropertyViewComponent} from './pages/property-view/property-view.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LogInComponentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'property/:id', component: PropertyViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
