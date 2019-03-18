import { Component, ViewChild } from '@angular/core';
import { DataService } from './data.service';
//import { ActivityComponent } from './trackingapp-activity/activity/activity.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  //@ViewChild(ActivityComponent) activity: ActivityComponent


  title = 'ActivityTimeTracker-UI-Angular';
  list:string [] = ["aa","ddd"];
  heroes:string [] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor (private dataService: DataService) {
      this.dataService.getData().subscribe(data => {
        
      });      
  }

  openAddModal() {
    //this.activity.openAddActivityDialog();
  }
}
