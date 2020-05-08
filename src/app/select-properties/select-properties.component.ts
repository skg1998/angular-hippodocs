import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import Stepper from 'bs-stepper';

@Component({
  selector: 'app-select-properties',
  templateUrl: './select-properties.component.html',
  styleUrls: ['./select-properties.component.css']
})
export class SelectPropertiesComponent implements OnInit {

  myForm = this.fb.group({
    password:[''],
    text: [''],
    font: [''],
    angle:[''],
    upload:[''],
  })

  constructor(private fb: FormBuilder) { };

  @Input() stepperAccess: any;

  ngOnInit(){};

}