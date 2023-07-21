import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponentComponent } from './pages/log-in-component/log-in-component.component';

const routes: Routes = [
  { path: 'login', component: LogInComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
