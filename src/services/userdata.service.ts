import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  uuid = "";
  username = "";
  password = "";
  email = "";
  constructor() { }
  setUserName(username:string) {
    this.username = username;
  }
  getUserName() {
    return this.username;
  }
  setPassword(password:string) {
    this.password = password;
  }
  getPassword() {
    return this.password;
  }
  setEmail(email:string) {
    this.email = email;
  }
  getEmail() {
    return this.email;
  }
  setUUID(uuid:string) {
    this.uuid = uuid;
  }
  getUUID() {
    return this.uuid;
  }
  authenticateUser() {
    // authenticate user with database
    // if user is authenticated, then return true
    // else return false
    return true;
  }
}
