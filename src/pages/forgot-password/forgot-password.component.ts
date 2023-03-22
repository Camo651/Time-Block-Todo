import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  @Output() backToHomeEvent = new EventEmitter();
  emailForgotPassword = '';
  sendForgotPasswordLink() {
    console.log('sendForgotPasswordLink');
  }
  updateForgotPasswordEmail(e:string){
    this.emailForgotPassword = e;
  }
  backToHome() {
    this.backToHomeEvent.emit();
  }
}
