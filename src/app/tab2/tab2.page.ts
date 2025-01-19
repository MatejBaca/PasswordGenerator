import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  sharedData: { websiteName: string; emailAddress: string; password: string }[] = [];

  constructor(private appComponent: AppComponent) {}

  ionViewWillEnter() {
    this.sharedData = this.appComponent.sharedData;
  }


  deleteEntry(index: number) {
    const confirmDelete = confirm('Are you sure you want to delete this entry?');
    if (confirmDelete) {
      this.sharedData.splice(index, 1);
      this.appComponent.sharedData = this.sharedData;
    }
  }
}
