import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  private _users: User[] = [];
  public get Users(): User[] {
    if (this._users.length == 0) {
      this.RefreshUsers();
    }
    return this._users;
  }
  public RefreshUsers(): void {
    this.http.get<User[]>(this.baseUrl + 'api/User/List').subscribe(result => {
      this._users = result;
    });
  }

  public UpdateUser(user: User): void {
    for (var i = 0; i < this._users.length; i++) {
      if (this._users[i].id == user.id) {
        this._users[i] = user;
        console.log({ new: user, replaced: this._users[i] });
        break;
      }
    }
    // push to server
  }


}
