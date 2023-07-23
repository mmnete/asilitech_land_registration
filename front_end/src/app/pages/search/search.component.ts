// search.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SearchResult {
  id: number;
  propertyName: string;
  propertyOwner: string;
  propertyImage: string;
  ownerImage: string;
  latitude: number;
  longitude: number;
  propertyAddress: string; // New field for property address
  ownershipYear: string; // New field for ownership year
  districtName: string; // New field for district name
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

  fakePropertyOwnerImageUrl  = 'https://static.vecteezy.com/system/resources/thumbnails/021/798/325/original/portrait-of-innocent-and-beautiful-muslim-african-woman-in-hijab-muslim-african-young-woman-in-black-hijab-looking-at-camera-and-smiling-video.jpg';
  fakePropertyImageUrl = 'https://www.ooba.co.za/app/uploads/2019/08/property-prices.jpg';

  fakeData: SearchResult[] = [
    {
      id: 1,
      propertyName: 'Property 1',
      propertyOwner: 'Hafsa',
      propertyImage: this.fakePropertyImageUrl,
      ownerImage: this.fakePropertyOwnerImageUrl,
      latitude: 12.345,
      longitude: 34.567,
      propertyAddress: 'House 34, Songea St',
      ownershipYear: '1998',
      districtName: 'Ilala',
    },
    {
      id: 2,
      propertyName: 'Property 2',
      propertyOwner: 'Amina',
      propertyImage: this.fakePropertyImageUrl,
      ownerImage: this.fakePropertyOwnerImageUrl,
      latitude: 12.678,
      longitude: 34.890,
      propertyAddress: 'House 34, Songea St',
      ownershipYear: '1998',
      districtName: 'Ilala',
    },
    // Add more fake data here
  ];

  constructor(private router: Router) { }

  goBack() {
    this.searchPerformed = false;
  }

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
