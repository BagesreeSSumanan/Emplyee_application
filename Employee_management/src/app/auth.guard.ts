import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../Services/Users.Service';

export const authGuard: CanActivateFn = (route, state) => {
  const Service = inject(UsersService);
  const router = inject(Router);
  if (Service.getLoggedInUser()) {
    console.log('authguard is called')
    console.log(Service.getLoggedInUser())
      return true;
    } else {
      router.navigate(['/login']);
      return false;
    }
};
