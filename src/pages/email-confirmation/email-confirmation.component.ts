import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent {
  @Output() backToHomeEvent = new EventEmitter();
  @Output() submitConfirmationCodeEvent = new EventEmitter<string>();
  @Output() emailConfirmationCodeSentEvent = new EventEmitter();
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
    for (let i = 0; i < 6; i++) {
      this.digits[i] = "";
    }

    let eml = document.getElementById("digit0") as HTMLInputElement;
    eml.focus();
  }
  submitCode() {
    // check that the code is even valid and filled out
    // check with the server that the code is correct
    // if correct, then set the user as authenticated
    // if incorrect, then display an error message
    // if the code is expired, then display an error message
    // if all good then send to create a new user profile
    // navigate to the dashboard if the user is authenticated

    let code = "";
    for (let i = 0; i < 6; i++) {
      code += this.digits[i];
    }
    this.submitConfirmationCodeEvent.emit(code);
  }
  backToHome(){
    this.backToHomeEvent.emit();
  }
  sendNewCode(){
    this.emailConfirmationCodeSentEvent.emit();
  }
}
