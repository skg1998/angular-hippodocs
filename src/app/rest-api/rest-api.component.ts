import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css']
})
export class RestApiComponent implements OnInit {

  constructor() { }
  @Input() stepperAccess: any;

  ngOnInit() {
  }

}