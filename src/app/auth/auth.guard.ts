import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  return authService.login('admin', '1234', true)
    .pipe(
      map(() => true),
      catchError(() => {
        void router.navigate(['login']);
        return of(false);
      })
    );
};

