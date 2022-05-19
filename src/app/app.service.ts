import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userName?:string= 'yonatan';

  constructor() {
  }
}
