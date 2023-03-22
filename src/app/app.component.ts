import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
    page = "homepage";
    uuid = "";
    email = "";

    constructor() {
      this.updatePage();
    }
    updatePage(){
      if(this.uuid != "") {
        this.page = "dashboard";
        return;
      }
      if(this.email != "") {
        this.page = "email-confirmation";
        return;
      }
      this.page = "homepage";
    }

    setUser(uuid:string) {
        this.uuid = uuid;
    }

    authenticateUser($event:{newUser:boolean, username:string, password:string, remember:boolean, password2:string, email:string}) {
        if ($event.newUser) {
            // email confirmation
            this.email = $event.email;
            sendEmailConfirmation(this.email);
            this.updatePage();
        } else {
            // authenticate user
        }
    }
}

function generateUUID() {
    /*
    * Generate a UUID based on the current time and a random number
    * @return {string} UUID
    */
    let d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}
function checkUuidExists(uuid:string) {
    // check if uuid exists in database
    return false;
}
function sendEmailConfirmation(email:string) {
    // send email confirmation with PHP mailer on server side
    // server should also generate a 6 digit code and store it in the database
    // as a kvp with the key as the email and the value as the code
    // maybe make a timeout so that the code expires after 5 minutes or something
    //https://github.com/PHPMailer/PHPMailer
}
