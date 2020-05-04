import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {TabModule} from 'angular-tabs-component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,NgxDropzoneModule ,FontAwesomeModule,TabModule],
  declarations: [ AppComponent, HelloComponent, FileUploadComponent, RestApiComponent, StepperComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
