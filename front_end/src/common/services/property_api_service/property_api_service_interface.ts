import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property, CreatePropertyRequest, UpdatePropertyRequest } from './property.proto';
import { InjectionToken } from '@angular/core';

export const PROPERTY_SERVICE_TOKEN = new InjectionToken<PropertyApiService>('PropertyService');

export interface PropertyApiService {
  getProperties(): Promise<Property[]>;
  getPropertyById(id: string): Promise<Property>;
  createProperty(property: Property): Promise<Property>;
  updateProperty(id: string, property: Property): Promise<Property>;
  deleteProperty(id: string): Promise<boolean>;
  searchProperties(searchQuery: string): Promise<Property[]>;
}