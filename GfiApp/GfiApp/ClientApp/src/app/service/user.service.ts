import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  public Users(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'api/User/List');
  }
}
