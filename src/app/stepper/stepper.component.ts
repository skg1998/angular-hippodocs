import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import Stepper from 'bs-stepper';
// import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  smallScreen: boolean;

    // constructor(
    //    private breakpointObserver: BreakpointObserver
    //   ) {
    //     breakpointObserver.observe([
    //       Breakpoints.XSmall,
    //       Breakpoints.Small
    //     ]).subscribe(result => {
    //       this.smallScreen = result.matches;
    //   });
    //  }

  private stepper: Stepper;

  next() {
    this.stepper.next();
  }

  onSubmit() {
    return false;
  }

  ngOnInit() {
    this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: true,
      animation: true,
      selectors: {
        steps: '.step',
        trigger: '.step-trigger',
        stepper: '.bs-stepper'
      }
   
    })
  }

}
