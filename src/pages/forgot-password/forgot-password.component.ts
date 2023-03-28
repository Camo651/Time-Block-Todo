import { Component} from '@angular/core';
import { PageRouterService } from 'src/services/page-router.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(
    private pagerouterService:PageRouterService
  ){}
  emailForgotPassword = '';
  sendForgotPasswordLink() {
    console.log('sendForgotPasswordLink');
  }
  updateForgotPasswordEmail(e:string){
    this.emailForgotPassword = e;
  }
  backToHome() {
    this.pagerouterService.setPage("homepage");
  }
}
