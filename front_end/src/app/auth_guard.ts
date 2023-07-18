import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { AuthService } from '../common/services/auth_service/auth_service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivateChild(route: any): boolean {
    if (!this.authService.isLoggedIn()) {
      // User is not logged in, redirect to the login route
      this.router.navigate(['/login']);
      return false;
    }

    if (route.data && route.data.redirectTo) {
      // User is logged in, redirect to the specified secure route
      this.router.navigate([route.data.redirectTo]);
      return false;
    }

    return true;
  }
}
