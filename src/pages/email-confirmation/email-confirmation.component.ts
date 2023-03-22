import { Component } from '@angular/core';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent {
  digits=["","","","","",""];
  inputDigit(index:number) {
    let eml = document.getElementById("digit"+index) as HTMLInputElement;
    if (eml == null) {
      return;
    }
    let digit = eml.value;
    if (digit.length != 1) {
      return;
    }
    if (index < 5) {
      eml = document.getElementById("digit"+(index)) as HTMLInputElement;
      eml.focus();
      eml.value = "";
    }
    this.digits[index] = digit;
  }

  noEmptyDigits() {
    for (let i = 0; i < 6; i++) {
      if (this.digits[i] == "") {
        return false;
      }
    }
    return true;
  }
  ngAfterViewInit() {
    //init each digit to ""
    for (let i = 0; i < 6; i++) {
      this.digits[i] = "";
    }

    let eml = document.getElementById("digit0") as HTMLInputElement;
    eml.focus();
  }
  submitCode() {
    alert("submit code");
  }
}
