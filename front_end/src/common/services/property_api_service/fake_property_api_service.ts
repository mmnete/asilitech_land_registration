import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property, CreatePropertyRequest, UpdatePropertyRequest } from './property.proto';
import { InjectionToken } from '@angular/core';
import { PropertyApiService } from "./property_api_service_interface";

export class FakePropertyApiService implements PropertyApiService {
    private properties: Property[] = [
        { id: '1', streetAddress: '123 Main St', district: 'Sample District', city: 'Sample City' },
        { id: '2', streetAddress: '456 Elm St', district: 'Sample District', city: 'Sample City' },
        { id: '3', streetAddress: '789 Oak St', district: 'Sample District', city: 'Sample City' }
      ];
    
    constructor() {}

    getProperties(): Promise<Property[]> {
        return Promise.resolve(this.properties);
    }

    getPropertyById(id: string): Promise<Property | undefined> {
        const property = this.properties.find(prop => prop.id === id);
        return Promise.resolve(property);
    }

    createProperty(request: CreatePropertyRequest): Promise<Property> {
        const newProperty: Property = {
            id: (this.properties.length + 1).toString(),
            streetAddress: request.streetAddress,
            district: request.district,
            city: request.city
        };
        this.properties.push(newProperty);
        return Promise.resolve(newProperty);
    }

    updateProperty(request: UpdatePropertyRequest): Promise<Property | undefined> {
        const propertyIndex = this.properties.findIndex(prop => prop.id === request.id);
        if (propertyIndex !== -1) {
            const updatedProperty: Property = {
            id: request.id,
            streetAddress: request.streetAddress || this.properties[propertyIndex].streetAddress,
            district: request.district || this.properties[propertyIndex].district,
            city: request.city || this.properties[propertyIndex].city
            };
            this.properties[propertyIndex] = updatedProperty;
            return Promise.resolve(updatedProperty);
        }
        return Promise.resolve(undefined);
    }

    deleteProperty(id: string): Promise<boolean> {
        const propertyIndex = this.properties.findIndex(prop => prop.id === id);
        if (propertyIndex !== -1) {
            this.properties.splice(propertyIndex, 1);
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    searchProperties(searchQuery: string): Promise<Property[]> {
        const filteredProperties = this.properties.filter(prop => {
            const lowerSearchQuery = searchQuery.toLowerCase();
            const lowerStreetAddress = prop.streetAddress.toLowerCase();
            const lowerDistrict = prop.district.toLowerCase();
            const lowerCity = prop.city.toLowerCase();
            return (
            lowerStreetAddress.includes(lowerSearchQuery) ||
            lowerDistrict.includes(lowerSearchQuery) ||
            lowerCity.includes(lowerSearchQuery)
            );
        });
        return Promise.resolve(filteredProperties);
    }
}