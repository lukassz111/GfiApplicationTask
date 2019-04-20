import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { User } from '../../model/User';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserEditFormComponent } from '../user-edit-form/user-edit-form.component';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-users-table-row',
  templateUrl: './users-table-row.component.html',
  styleUrls: ['./users-table-row.component.css']
})
export class UsersTableRowComponent implements OnInit {
  @ViewChild('modalTemplate') modalTemplate;
  @Input('user') user: User;
  public modalRef: NgbModalRef;
  constructor(
    private modalService: NgbModal,
    private userService: UserService
  ) { }

  submit(form: UserEditFormComponent) {
    var user: User = form.submit();
    console.log(user);
    this.modalRef.close();
    this.userService.UpdateUser(user);
  }
  cancel() {
    this.modalRef.close();
  }

  ngOnInit() {
  }

  openModalEdit() {
    this.modalRef = this.modalService.open(this.modalTemplate, {
      backdrop: 'static',
      backdropClass: 'modal-style-backdrop',
      centered: true,
      windowClass: 'modal-style',
      keyboard: false
    });
    /*this.modalRef.result.then(
      result => {
        console.log("result " +result);
      },
      reason => {
        console.log("reason "+reason);
      }
    );*/
  }
}
