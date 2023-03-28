import { Component} from '@angular/core';
import { PageRouterService } from 'src/services/page-router.service';
import { UserdataService } from 'src/services/userdata.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(
    private userDataService:UserdataService,
    private pageRouterService:PageRouterService
  ){}
    signin = false;
    username = "";
    password = "";
    password2 = "";
    email = "";
    remember = false;
    switchModes() {
      this.signin = !this.signin;
    }
    userSignIn() {
      let user = {
        newUser: false,
        username: this.username,
        password: this.password,
        remember: this.remember,
        password2: "",
        email: ""
      };
      this.pageRouterService.setPage("dashboard");
    }
    userSignUp() {
      let user = {
        newUser: true,
        username: this.username,
        password: this.password,
        password2: this.password2,
        email: this.email,
        remember: this.remember
      };
      this.pageRouterService.setPage("email-confirmation");

    }
    editField(field:string, value:string) {
      switch(field) {
        case "username":this.username = value;break;
        case "password":this.password = value;break;
        case "password2":this.password2 = value;break;
        case "email":this.email = value;break;
        case "remember":this.remember = value=="true"?true:false;break;
      }
    }
    forgotPassword(){
      this.pageRouterService.setPage("forgot-password");
    }
}
