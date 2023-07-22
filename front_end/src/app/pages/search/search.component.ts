// search.component.ts

import { Component } from '@angular/core';

interface SearchResult {
  id: number;
  propertyName: string;
  propertyOwner: string;
  propertyImage: string;
  ownerImage: string;
  latitude: number;
  longitude: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';
  searchPerformed: boolean = false;
  searchResults: SearchResult[] = [];

  fakeData: SearchResult[] = [
    {
      id: 1,
      propertyName: 'Property 1',
      propertyOwner: 'Owner 1',
      propertyImage: 'https://fake-property-image-url.com/property1.jpg',
      ownerImage: 'https://fake-owner-image-url.com/owner1.jpg',
      latitude: 12.345,
      longitude: 34.567
    },
    {
      id: 2,
      propertyName: 'Property 2',
      propertyOwner: 'Owner 2',
      propertyImage: 'https://fake-property-image-url.com/property2.jpg',
      ownerImage: 'https://fake-owner-image-url.com/owner2.jpg',
      latitude: 12.678,
      longitude: 34.890
    },
    // Add more fake data here
  ];

  onSearch(): void {
    if (this.searchQuery.trim() === '') {
      // If search query is empty, show all results
      this.searchResults = this.fakeData;
    } else {
      // Perform filtered search based on user's input
      const searchTerm = this.searchQuery.toLowerCase().trim();
      this.searchResults = this.fakeData.filter(
        (result) =>
          result.propertyName.toLowerCase().includes(searchTerm) ||
          result.propertyOwner.toLowerCase().includes(searchTerm)
      );
    }

    this.searchPerformed = true;
  }

  onHereClicked(): void {
    if (navigator.geolocation) {
      // Get the user's location using browser GPS
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;

          // Perform filtered search based on user's location
          // You can adjust the distance calculation based on your requirements
          this.searchResults = this.fakeData.filter(
            (result) =>
              this.calculateDistance(
                userLatitude,
                userLongitude,
                result.latitude,
                result.longitude
              ) <= 10 // Filter properties within 10 km radius from user's location
          );

          this.searchPerformed = true;
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }

  calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // Replace this function with the actual distance calculation method
    // You can use Haversine formula or other distance calculation libraries
    // For simplicity, let's assume latitudes and longitudes are in degrees here
    const radlat1 = (Math.PI * lat1) / 180;
    const radlat2 = (Math.PI * lat2) / 180;
    const theta = lon1 - lon2;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515; // Distance in miles, adjust conversion factor as needed
    return dist;
  }
}
