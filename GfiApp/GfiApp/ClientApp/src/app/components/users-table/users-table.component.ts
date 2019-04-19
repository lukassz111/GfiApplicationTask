import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  private _users: User[] = [];
  public get Users(): User[] {
    return this._users;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.Users().subscribe(result => {
      this._users = result;
    })
  }

}
