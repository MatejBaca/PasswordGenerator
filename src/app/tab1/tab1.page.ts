import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  websiteName: string = 'www.';
  username: string = '';
  emailAddress: string = '';
  password: string = '';
  isGenerated: boolean = false;

  constructor(private appComponent: AppComponent) {}

  generatePassword() {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    
    let password = '';
    password += this.getRandomChar(uppercaseChars);
    password += this.getRandomChar(numberChars);
    password += this.getRandomChar(specialChars);

    const allChars = lowercaseChars + uppercaseChars + numberChars + specialChars;
    const remainingLength = Math.max(8, 12) - password.length;
    for (let i = 0; i < remainingLength; i++) {
      password += this.getRandomChar(allChars);
    }

    this.password = this.shuffleString(password);
    this.isGenerated = true;
  }

  private getRandomChar(charSet: string): string {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
  }

  private shuffleString(str: string): string {
    return str
      .split('')
      .sort(() => 0.5 - Math.random())
      .join('');
  }

  onSubmit() {
    if (!this.emailAddress) {
      alert('Email address is required!');
      return;
    }

    const newEntry = {
      websiteName: this.websiteName || 'N/A',
      emailAddress: this.emailAddress,
      password: this.password,
    };

    this.appComponent.sharedData.push(newEntry);
    alert('Password saved successfully!');

    this.websiteName = 'www.';
    this.emailAddress = '';
    this.password = '';
    this.isGenerated = false;

    alert('Password saved successfully!');
  }
}
