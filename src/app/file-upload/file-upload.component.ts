import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() stepperAccess: any;

  constructor() { }

  ngOnInit() {
  }

  files: File[] = [];

onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}
 
onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

selectTab(selectedTab){
  $("#nav-tab").find("a").removeClass("active");
  $(`[href='${selectedTab}']`).addClass("active");

  $('#nav-tabContent').find('[role="tabpanel"]').removeClass("active").removeClass("show")
  $(selectedTab).addClass("active").addClass("show")

  return false;
}

}