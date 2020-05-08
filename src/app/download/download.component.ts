import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }
  @Input() stepperAccess: any;

  ngOnInit() {
  }

}