import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from '../model/activity';


@Component({
  selector: 'add-activity-dialog',
  templateUrl: './add-activity-dialog.component.html'
  
})

export class AddActivityDialogComponent {
  activityList:Activity [];
  constructor(public dialogRef: MatDialogRef<AddActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private  data: any) {
      this.activityList = data.activityList;
    }

    addActivity(newActivity: any ){      
      let activity = new  Activity(newActivity.storyPoints, newActivity.typeOfActivity, newActivity.description );      
      this.activityList.push(activity)    
      return false;
    }
   
    onClose() {
      this.dialogRef.close();
    }
}
