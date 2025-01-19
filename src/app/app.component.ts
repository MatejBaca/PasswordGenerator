import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  sharedData: { websiteName: string; emailAddress: string; password: string }[] = [];
  constructor() {}
}
