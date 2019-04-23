import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../model/User';
import { UserService } from '../../service/user.service';
import { isUndefined } from 'util';
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  private multiEditList: Array<number> = [];
  public checkEdit(user_id: number): void {
    if (isUndefined(this.multiEditList.find(x => x == user_id))) {
      this.multiEditList.push(user_id);
    }
    this.multiEditList.sort((a, b) => { return b - a });
  }
  public checkedEdit(user_id: number): boolean {
    return !isUndefined(this.multiEditList.find(x => x == user_id));
  }
  public uncheckEdit(user_id: number): void {
    this.multiEditList = this.multiEditList.filter(x => x != user_id);
  }
  public toggleEdit(user_id: number): void {
    if (this.checkedEdit(user_id)) {
      this.uncheckEdit(user_id);
    }
    else {
      this.checkEdit(user_id);
    }
  }

  @ViewChild('modalTemplate') modalTemplate;
  private modalRef: NgbModalRef;
  private modalUser: User;
  private modalNextButtonDisabled = false;
  public openModal() {
    this.modalUser = this.nextUserToEdit;
    if (isUndefined(this.modalUser))
      return;
    this.modalRef = this.modalService.open(this.modalTemplate, {
      backdrop: 'static',
      backdropClass: 'modal-style-backdrop',
      centered: true,
      windowClass: 'modal-style',
      keyboard: false
    });
  }
  public submitModal(form: UserEditFormComponent): void {
    var user: User = form.submit();
    this.userService.UpdateUser(user);
  }
  public submitNextModal(form: UserEditFormComponent): void {
    this.submitModal(form);
    this.nextModal();
  }
  private get nextUserToEdit(): User{
    if (this.multiEditList.length <= 0)
      return undefined;
    this.modalNextButtonDisabled = (this.multiEditList.length == 1);
    var user_id = this.multiEditList.pop();
    var user = this.Users.find(x => x.id == user_id);
    return user;
  }
  public nextModal(): void {
    this.modalRef.close();
    if (!this.modalNextButtonDisabled)
      this.openModal();
  }
  public canceModal(): void {
    this.modalRef.close();
  }


  public get Users(): User[] {
    return this.userService.Users;
  }

  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) {
  }

  ngOnInit() {
  }

}
