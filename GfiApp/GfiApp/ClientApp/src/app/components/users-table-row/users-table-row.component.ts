import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/User';

@Component({
  selector: 'app-users-table-row',
  templateUrl: './users-table-row.component.html',
  styleUrls: ['./users-table-row.component.css']
})
export class UsersTableRowComponent implements OnInit {
  @Input('user') user: User;
  constructor() { }

  ngOnInit() {
  }

}
