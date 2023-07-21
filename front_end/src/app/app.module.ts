import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponentComponent } from './log-in-component/log-in-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';

const routes: Routes = [
  { path: 'login', component: LogInComponentComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LogInComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule, AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
