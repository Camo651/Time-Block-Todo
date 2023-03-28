import { Component } from '@angular/core';
import { PageRouterService } from 'src/services/page-router.service';
import { UserdataService } from 'src/services/userdata.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private userDataService:UserdataService,
    private pageRouterService:PageRouterService
  ) {
    console.log(userDataService.getUserName());
  }
  getPage() {
    return this.pageRouterService.getPage();
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
