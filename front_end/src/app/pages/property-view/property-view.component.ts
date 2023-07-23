import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.scss']
})
export class PropertyViewComponent implements OnInit {
  propertyId: number;
  propertyData: any; // Replace any with your property data interface or type

  titleDeedExample = 'https://upload.wikimedia.org/wikipedia/commons/8/80/Example_of_a_blank_Kenyan_Deed_Title.png';

  // Fake property data for demonstration purposes
  fakePropertyData = {
    id: 1,
    propertyName: 'Property 1',
    propertyOwner: 'Hafsa',
    propertyImage: 'fakePropertyImageUrl',
    ownerImage: 'fakePropertyOwnerImageUrl',
    latitude: 12.345,
    longitude: 34.567,
    propertyAddress: 'House 34, Songea St',
    ownershipYear: '1998',
    districtName: 'Ilala',
    propertyImages: ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'],
    titleDeedImage: this.titleDeedExample,
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the property ID from the route parameter
    this.route.paramMap.subscribe(params => {
      this.propertyId = +params.get('id')!;
      // Assuming the property data is fetched from a backend API using the property ID
      // For this example, we'll just use the fake property data
      this.propertyData = this.fakePropertyData;
    });
  }

  // Function to view the ownership history
  onViewOwnershipHistory(): void {
    // Implement the logic to view ownership history here
  }
}
