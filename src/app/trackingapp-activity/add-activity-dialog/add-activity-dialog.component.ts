import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from '../model/activity';


@Component({
  selector: 'add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html'
  
})

export class AddActivityDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private  activityList: Activity[]) {
      console.log(activityList);
    }

    addActivity(newActivity: any ){
      let activity = new  Activity(newActivity.storyPoints, newActivity.typeOfActivity, newActivity.description );
      console.log(this.activityList);
      this.activityList.push(activity)    
      return false;
    }

    onNoClick(): void {

      
      this.dialogRef.close();
    }
    onCancel() {
      this.dialogRef.close();
    }
}
