import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

    @Output() homepageEvent = new EventEmitter<{newUser:boolean, username:string, password:string, remember?:boolean, password2?:string, email?:string}>();

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
            remember: this.remember
        };
        this.homepageEvent.emit(user);
    }
    userSignUp() {
        let user = {
            newUser: true,
            username: this.username,
            password: this.password,
            password2: this.password2,
            email: this.email
        };
        this.homepageEvent.emit(user);
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
}
