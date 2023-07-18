import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Property, CreatePropertyRequest, UpdatePropertyRequest } from './property.proto';
import { InjectionToken } from '@angular/core';

export class PropertyApiService implements PropertyApiService {

    constructor() {}

    getProperties(): Promise<Property[]> {
    return Promise.resolve([]);
    }

    getPropertyById(id: string): Promise<Property | undefined> {
    return Promise.resolve(undefined);
    }

    createProperty(request: CreatePropertyRequest): Promise<Property> {
    return Promise.resolve(new Property());
    }

    updateProperty(request: UpdatePropertyRequest): Promise<Property | undefined> {
    return Promise.resolve(undefined);
    }

    deleteProperty(id: string): Promise<boolean> {
    return Promise.resolve(false);
    }

    searchProperties(searchQuery: string): Promise<Property[]> {
    return Promise.resolve([]);
    }
}