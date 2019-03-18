import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from '../model/activity';


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
