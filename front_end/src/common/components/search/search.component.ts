import { Component } from '@angular/core';
import { SearchResult } from './search-result-card.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: SearchResult[] = [];

  onSearch() {
    // Perform search logic here
    // Replace this with your actual search implementation
    // For now, let's assume we have some mock search results
    this.searchResults = [
      { title: 'Result 1', description: 'Description of Result 1' },
      { title: 'Result 2', description: 'Description of Result 2' },
      { title: 'Result 3', description: 'Description of Result 3' },
      // Add more mock results as needed
    ];
  }
}
