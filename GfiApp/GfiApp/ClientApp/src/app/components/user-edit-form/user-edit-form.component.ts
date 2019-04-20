import { Component, OnInit, Input, ViewChild, Output } from '@angular/core';
import { User } from '../../model/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit-form',
  templateUrl: './user-edit-form.component.html',
  styleUrls: ['./user-edit-form.component.css']
})
export class UserEditFormComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  @Input('user') userInput: User;
  public user: User;
  ngOnInit() {
    this.user = this.userInput;
  }
  public submit(): User {
    if (this.Valid) {
      var user = this.form.value;
      user.id = this.user.id;
      return user;
    }
    return this.userInput;
  }
  public get Valid(): boolean {
    return this.form.form.status == "VALID";
  }
  constructor() { }


}
