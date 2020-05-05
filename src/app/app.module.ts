import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { StepperComponent } from './stepper/stepper.component';
import { SelectPropertiesComponent } from './select-properties/select-properties.component';
import { DownloadComponent } from './download/download.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,NgxDropzoneModule ,FontAwesomeModule,],
  declarations: [ AppComponent, HelloComponent, FileUploadComponent, RestApiComponent, StepperComponent, SelectPropertiesComponent, DownloadComponent, HomePageComponent ],
  bootstrap:    [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
