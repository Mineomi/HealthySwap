import { Component, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  bmi : any
  bmiRange : any

  calculateBMI(height :any, weight : any){
    this.bmi = weight / (height/100 * height/100)
    this.bmi = this.round(this.bmi, 2)

    switch(true){
      case this.bmi<16: this.bmiRange = "Wygłodznie"; break;
      case this.bmi<17: this.bmiRange = "Wychudzenie"; break;
      case this.bmi<18.5: this.bmiRange = "Niedowaga"; break;
      case this.bmi<25: this.bmiRange = "Pożądania masa ciała"; break;
      case this.bmi<30: this.bmiRange = "nadwaga"; break;
      case this.bmi<35: this.bmiRange = "otyłość 1 stopnia"; break;
      case this.bmi<40: this.bmiRange = "otyłość 2 stopnia (duża)"; break;
      case this.bmi>40: this.bmiRange = "otyłość 3 stopnia (chorobliwa)"; break;
    }
  }

  round(num: number, fractionDigits: number): number {
    return Number(num.toFixed(fractionDigits))
}


@ViewChild('popover') popover :any;

isOpen = false;

presentPopover(e: Event) {
  this.popover.event = e;
  this.isOpen = true;
}

  constructor() {}

}
