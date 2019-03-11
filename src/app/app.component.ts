import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ActivityTimeTracker-UI-Angular';
  list:string [] = ["aa","ddd"];
  heroes:string [] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor (private dataService: DataService) {
      this.dataService.getData().subscribe(data => {
        
      });      
  }

}
