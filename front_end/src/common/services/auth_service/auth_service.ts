import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../../api/land_registration.proto'; // Import the User proto message

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'user';

  constructor(private router: Router) {}

  register(user: User): Promise<User> {
    return new Promise((resolve) => {
      // Save the registered user details in browser cache
      localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      resolve(user);
    });
  }

  login(user: User): Promise<User> {
    return new Promise((resolve, reject) => {
      // Check if the user is in browser cache
      const storedUser = localStorage.getItem(this.USER_KEY);
      if (storedUser) {
        const storedUserData: User = JSON.parse(storedUser);
        if (storedUserData.email === user.email && storedUserData.password === user.password) {
          resolve(storedUserData);
        } else {
          reject(new Error('Invalid email or password'));
        }
      } else {
        reject(new Error('User not found'));
      }
    });
  }

  logout(): Promise<void> {
    return new Promise((resolve) => {
      // Remove the user from browser cache
      localStorage.removeItem(this.USER_KEY);
      resolve();
    });
  }

  isLoggedIn(): boolean {
    // Check if the user is in browser cache
    return !!localStorage.getItem(this.USER_KEY);
  }

  getCurrentUser(): User | null {
    // Get the current logged in user from browser cache
    const storedUser = localStorage.getItem(this.USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  }

  // Example of protecting routes that require login
  protectRouteIfNotLoggedIn(url: string): boolean {
    const isLoggedIn = this.isLoggedIn();
    if (!isLoggedIn && this.requiresLogin(url)) {
      this.router.navigate(['/login-register'], { queryParams: { returnUrl: url } });
      return false;
    }
    return true;
  }

  // Example of checking if a route requires login
  requiresLogin(url: string): boolean {
    // Implement your logic to determine which routes require login
    // Here's a simple example where any route starting with '/secure' requires login
    return url.startsWith('/secure');
  }
}
