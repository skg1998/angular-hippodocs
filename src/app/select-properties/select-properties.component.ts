import { Component, OnInit } from '@angular/core';
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

  private stepper: Stepper;

  next() {
    this.stepper.next();
  }

  // onSubmit() {
  //   return false;
  // }

  // ngOnInit() {
  //   this.stepper = new Stepper(document.querySelector('#stepper1'), {
  //     linear: true,
  //     animation: true,
  //     selectors: {
  //       steps: '.step',
  //       trigger: '.step-trigger',
  //       stepper: '.bs-stepper'
  //     }
   
  //   })
  // }

  ngOnInit(){};

}