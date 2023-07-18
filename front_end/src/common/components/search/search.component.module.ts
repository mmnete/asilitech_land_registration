import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SearchComponent } from './search.component';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchComponentModule { }
