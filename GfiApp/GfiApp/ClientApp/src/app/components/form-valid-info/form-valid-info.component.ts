import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-valid-info',
  templateUrl: './form-valid-info.component.html',
  styleUrls: ['./form-valid-info.component.css']
})
export class FormValidInfoComponent implements OnInit {
  @Input('input') input: any;
  constructor() { }

  ngOnInit() {
  }

}
