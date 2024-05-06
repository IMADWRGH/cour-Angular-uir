import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private router: Router) { }
  // login(username: string, pwd: string, isAdmin: boolean) {
  //   if (username == "admin" && pwd == "1234") {
  //     this.router.navigate(['/add', '/'])
  //   }
  // }

  login(username: string, pwd: string, bypassCheck?: boolean) {
    if (username == "admin" && pwd == "1234") {
      this.currentUserSubject.next({ username: 'admin' });
      if (bypassCheck) {
        return of(true);
      } else {
        this.router.navigate(['/protected-route']);
        return of(true);
      }
    } else {
      this.router.navigate(['login']);
      return of(false);
    }
  }

  isAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }


}
