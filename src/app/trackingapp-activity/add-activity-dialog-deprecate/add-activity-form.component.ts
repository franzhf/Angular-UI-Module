import { Component, OnInit, Inject  } from '@angular/core';
import { Activity } from "../Model/activity";
import { ActivityService } from '../activity-service';
import {Router} from "@angular/router"
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-activity-form',
  templateUrl: './add-activity-form.component.html',
  styleUrls: ['./add-activity-form.component.sass']
})
export class AddActivityFormComponent implements OnInit {
  activityList: Activity[];
  typeOfActivitySlected:string;

  constructor(private dialog: MatDialog, private activityService: ActivityService, private router: Router) {
    console.log("add activity");
    /*if(activityList === null)
      throw new Error('You must provide the activity list');*/
      this.activityService.getData().subscribe(data => {            
        this.activityList = data;
    })

    const dialogRef = this.dialog.open(AddActivityDialogComponent, {
      width: '550px',
      data: {activityList: this.activityList}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });

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

@Component({
  selector: 'add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html'
  
})

export class AddActivityDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public  activityList: Activity[]) {}

    onNoClick(): void {
      this.dialogRef.close();
    }  
}
