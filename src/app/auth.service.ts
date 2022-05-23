import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() { }

  getUser(): Observable<string | null> {
    return this.user$.asObservable();
  }

  setUser(user: string) {
    this.user$.next(user);
  }

  logout() {
    this.user$.next(null);
  }




}
