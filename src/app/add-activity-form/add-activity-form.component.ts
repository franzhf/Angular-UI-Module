import { Component, OnInit } from '@angular/core';
import { Activity } from "../Model/activity";
import { ActivityService } from '../activity-service';
import {Router} from "@angular/router"
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-add-activity-form',
  templateUrl: './add-activity-form.component.html',
  styleUrls: ['./add-activity-form.component.sass']
})
export class AddActivityFormComponent implements OnInit {
  activityList: Activity[];
  typeOfActivitySlected:string;
  constructor(private activityService: ActivityService, private router: Router) {
    console.log("add activity");
    /*if(activityList === null)
      throw new Error('You must provide the activity list');*/
      this.activityService.getData().subscribe(data => {            
        this.activityList = data;
    })
  }

  ngOnInit() {
      this.typeOfActivitySlected = 'Reading';
  }

  addActivity(newActivity: any ){
    let activity = new  Activity(newActivity.storyPoints, newActivity.typeOfActivity, newActivity.description );
    this.activityList.push(activity)
    this.router.navigate(["/activities"]);
    return false;
  }

}
