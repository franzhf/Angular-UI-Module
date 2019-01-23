import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ActivityTimeTracker-UI-Angular';
  list:string [] = ["aa","ddd"];
  heroes:string [] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];


}
