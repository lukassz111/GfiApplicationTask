import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';
//import { setInterval } from 'timers';

@Injectable()
export class UserService {
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.RefreshUsers();
   // this.timer = setInterval(() => this.RefreshUsers(), 5000);
  }
  private timer: any;
  private _users: User[] = [];
  public get Users(): User[] {
    return this._users;
  }

  private appendUser(user: User): void {
    for (var i = 0; i < this._users.length; i++) {
      if (this._users[i].id == user.id) {
        this._users[i] = user;
        return;
      }
    }
    this._users.push(user);
    this._users.sort( (a, b) => (a.id - b.id) );
  }

  public RefreshUsers(): void {
    this.http.get<number[]>(this.baseUrl + 'api/User').subscribe(ids => {
      ids.forEach((v) => {
        this.http.get<User>(this.baseUrl + 'api/User/' + v).subscribe(user => {
          this.appendUser(user);
        });
      });
    });
  }

  public UpdateUser(user: User): void {
    console.log(user);
    for (var i = 0; i < this._users.length; i++) {
      if (this._users[i].id == user.id) {
        this._users[i] = user;
        console.log({ new: user, replaced: this._users[i] });
        break;
      }
    }
    this.http.post<boolean>(this.baseUrl + 'api/User/' + user.id, user).subscribe(result => {
      console.log("SendUpdate");
    })
  }

  public DeleteUser(user: User): void {
    this.http.delete(this.baseUrl + 'api/User/' + user.id).subscribe(result => { });
    this._users = this._users.filter( item => item.id != user.id );

  }


}
