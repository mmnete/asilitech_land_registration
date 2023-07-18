import { Component, Input } from '@angular/core';

export interface SearchResult {
  title: string;
  description: string;
}

@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.css']
})
export class SearchResultCardComponent {
  @Input() result: SearchResult = {title: '', description: ''};
}
